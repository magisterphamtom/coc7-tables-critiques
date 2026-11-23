/* CoC7 Tables de critiques : une table de conséquences par compétence, tirée à la demande du Gardien
   (bouton sur la carte du jet) ou automatiquement à chaque réussite critique / maladresse. */
import { TABLES, GENERIQUE } from './data.js'

const ID = 'coc7-tables-critiques'
const DOSSIER = 'Critiques et maladresses'
const get = (k) => game.settings.get(ID, k)
const t = (k, d) => (d ? game.i18n.format(`CTC.${k}`, d) : game.i18n.localize(`CTC.${k}`))
const esc = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]))
const norm = (s) => String(s ?? '').normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase()
const TOUTES = [...TABLES, GENERIQUE]
const KINDS = ['critique', 'maladresse']
const vus = new Map()   // id du message → nombre de critiques / maladresses déjà vus

Hooks.once('init', () => {
  game.settings.register(ID, 'auto', {
    name: 'CTC.settings.auto.name', hint: 'CTC.settings.auto.hint',
    scope: 'world', config: true, type: Boolean, default: false
  })
  class MenuTest extends foundry.applications.api.ApplicationV2 {
    async render () { tester(); return this }   // pas de fenêtre propre : ouvre directement la fenêtre d'essai
  }
  game.settings.registerMenu(ID, 'test', {
    name: 'CTC.settings.test.name', label: 'CTC.settings.test.label', hint: 'CTC.settings.test.hint',
    icon: 'fa-solid fa-dice', type: MenuTest, restricted: true
  })
  game.settings.register(ID, 'visibilite', {
    name: 'CTC.settings.visibilite.name', hint: 'CTC.settings.visibilite.hint',
    scope: 'world', config: true, type: String, default: 'public',
    choices: { public: 'CTC.settings.visibilite.public', mj: 'CTC.settings.visibilite.mj' }
  })
})

/* ---------- Détection dans les cartes de jet CoC7 ---------- */
const TOTAUX = /<h4 class="dice-total([^"]*)"[^>]*>\s*(\d+)/g
function compte (message) {
  const totaux = [...(message.content ?? '').matchAll(TOTAUX)]
  return {
    critique: totaux.filter((m) => /\bcritical\b/.test(m[1])).length,
    maladresse: totaux.filter((m) => /\bfumble\b/.test(m[1])).length
  }
}

/** Texte (sans accents, minuscules) qui désigne la compétence jouée : objet de la fiche si on le retrouve, sinon intitulé du jet. */
function texteCompetence (message) {
  const load = message.flags?.CoC7?.load ?? {}
  const morceaux = []
  try {
    const acteur = load.actorUuid ? fromUuidSync(load.actorUuid, { strict: false }) : null
    const actor = acteur?.actor ?? acteur
    for (const id of [load.skillId, load.itemId, load.skillUuid]) {
      const item = id ? (actor?.items?.get?.(String(id).split('.').pop()) ?? null) : null
      if (item?.name) morceaux.push(item.name)
    }
  } catch (e) { /* rien */ }
  for (const k of ['skillName', 'name', 'label', 'itemName']) if (typeof load[k] === 'string') morceaux.push(load[k])
  morceaux.push((message.flavor || '').replace(/<[^>]+>/g, ' '))
  return norm(morceaux.join(' '))
}

function familleDe (texte) {
  for (const f of TABLES) if (new RegExp(f.motif).test(texte)) return f
  return GENERIQUE
}

/* ---------- Tables du monde (modifiables par le Gardien) ---------- */
async function dossierTables () {
  let d = game.folders.find((f) => f.type === 'RollTable' && f.name === DOSSIER)
  if (!d) d = await Folder.create({ name: DOSSIER, type: 'RollTable', color: '#7a1f1f' })
  return d
}
const titreTable = (f, kind) => `${f.nom} — ${kind === 'critique' ? 'Réussite critique' : 'Maladresse'}`

async function creerTablesManquantes () {
  const dossier = await dossierTables()
  let crees = 0
  for (const f of TOUTES) {
    for (const kind of KINDS) {
      const cle = `${f.cle}.${kind}`
      if (game.tables.find((x) => x.getFlag(ID, 'cle') === cle)) continue
      const lignes = f[kind]
      await RollTable.create({
        name: titreTable(f, kind),
        folder: dossier.id,
        formula: `1d${lignes.length}`,
        description: `<p>Conséquence tirée quand un jet de ${esc(f.nom.toLowerCase())} est ${kind === 'critique' ? 'une réussite critique' : 'une maladresse'}. Modifie, ajoute ou retire des lignes comme dans n'importe quelle table.</p>`,
        flags: { [ID]: { cle } },
        results: lignes.map((texte, i) => ({ type: 'text', name: texte, description: '', range: [i + 1, i + 1], weight: 1 }))
      })
      crees++
    }
  }
  return crees
}

Hooks.once('ready', async () => {
  game.modules.get(ID).api = { tirer, tester, creerTablesManquantes, familles: TOUTES.map((f) => f.cle) }
  for (const m of game.messages) if (m.flags?.CoC7) vus.set(m.id, compte(m))   // jets déjà dans le chat : pas de tirage automatique rétroactif
  if (!game.user.isGM || game.users.activeGM?.id !== game.user.id) return
  try {
    const n = await creerTablesManquantes()
    if (n) ui.notifications.info(t('tablesCreees', { n }))
  } catch (e) { console.error(ID, e); ui.notifications.error(t('err.tables')) }
})

/* ---------- Tirage et carte de chat ---------- */
async function tirer (famille, kind) {
  const cle = `${famille.cle}.${kind}`
  const table = game.tables.find((x) => x.getFlag(ID, 'cle') === cle)
  if (table) {
    const draw = await table.draw({ displayChat: false })
    const r = draw.results?.[0]
    const texte = r?.name || r?.description || r?.text
    if (texte) return texte
  }
  const lignes = famille[kind]
  return lignes[Math.floor(Math.random() * lignes.length)]   // table supprimée ou vide : on pioche dans les textes d'origine
}

function carte ({ famille, kind, texte, acteur }) {
  const critique = kind === 'critique'
  return `<div class="ctc-card ctc-${kind}">
    <header><i class="fa-solid ${critique ? 'fa-star' : 'fa-skull'}"></i> <span>${critique ? t('titre.critique') : t('titre.maladresse')}</span></header>
    <div class="ctc-meta">${esc(famille.nom)}${acteur ? ` · ${esc(acteur)}` : ''}</div>
    <p class="ctc-texte">${esc(texte)}</p>
  </div>`
}

async function poster (famille, kind, acteur = '') {
  const texte = await tirer(famille, kind)
  await ChatMessage.create({
    content: carte({ famille, kind, texte, acteur }),
    speaker: { alias: t('speaker') },
    whisper: get('visibilite') === 'mj' ? ChatMessage.getWhisperRecipients('GM').map((u) => u.id) : [],
    flags: { [ID]: { cle: famille.cle, kind, acteur } }
  })
}

async function consequence (message, kind) {
  await poster(familleDe(texteCompetence(message)), kind, message.speaker?.alias ?? '')
}

/** Essai sans faire de jet : fenêtre de choix (famille, type), carte de conséquence et, si le module est là, effet plein écran de Critiques du Mythe. */
async function tester (cle, kind) {
  if (cle && kind) {
    const famille = TOUTES.find((f) => f.cle === cle) ?? GENERIQUE
    return poster(famille, kind, game.user.character?.name ?? '')
  }
  const effet = game.modules.get('critiques-du-mythe')?.active && game.modules.get('critiques-du-mythe').api?.tester
  const options = TOUTES.map((f) => `<option value="${f.cle}">${esc(f.nom)}</option>`).join('')
  const content = `<div class="ctc-test">
    <div class="form-group"><label>${t('test.famille')}</label><select name="famille">${options}</select></div>
    <div class="form-group"><label>${t('test.kind')}</label><select name="kind"><option value="critique">${t('titre.critique')}</option><option value="maladresse">${t('titre.maladresse')}</option></select></div>
    ${effet ? `<div class="form-group"><label>${t('test.effet')}</label><input type="checkbox" name="effet" checked></div>` : ''}
  </div>`
  const r = await foundry.applications.api.DialogV2.prompt({
    window: { title: t('test.titre'), icon: 'fa-solid fa-dice' },
    content,
    ok: { label: t('test.go'), icon: 'fa-solid fa-dice', callback: (ev, button) => ({ famille: button.form.elements.famille.value, kind: button.form.elements.kind.value, effet: !!button.form.elements.effet?.checked }) },
    rejectClose: false
  })
  if (!r) return
  await poster(TOUTES.find((f) => f.cle === r.famille) ?? GENERIQUE, r.kind, game.user.character?.name ?? '')
  if (r.effet && effet) { try { game.modules.get('critiques-du-mythe').api.tester(r.kind === 'critique' ? 'critical' : 'fumble') } catch (e) { console.error(ID, e) } }
}

/* Bouton sur la carte du jet (Gardien seulement) et bouton « Retirer » sur la carte de conséquence. */
Hooks.on('renderChatMessageHTML', (message, html) => {
  try {
    if (!game.user.isGM) return
    const el = html instanceof HTMLElement ? html : html?.[0]
    if (!el) return
    const propre = message.flags?.[ID]
    if (propre) {
      if (el.querySelector('.ctc-retirer')) return
      const b = document.createElement('button')
      b.type = 'button'; b.className = 'ctc-retirer'; b.innerHTML = `<i class="fa-solid fa-dice"></i> ${t('retirer')}`
      b.addEventListener('click', async (ev) => {
        ev.preventDefault()
        const famille = TOUTES.find((f) => f.cle === propre.cle) ?? GENERIQUE
        const texte = await tirer(famille, propre.kind)
        await message.update({ content: carte({ famille, kind: propre.kind, texte, acteur: propre.acteur }) })
      })
      el.querySelector('.message-content')?.append(b)
      return
    }
    if (!message.flags?.CoC7 || el.querySelector('.ctc-actions')) return
    const n = compte(message)
    if (!n.critique && !n.maladresse) return
    const zone = document.createElement('div')
    zone.className = 'ctc-actions'
    for (const kind of KINDS) {
      if (!n[kind]) continue
      const b = document.createElement('button')
      b.type = 'button'; b.className = `ctc-btn ctc-btn-${kind}`
      b.innerHTML = `<i class="fa-solid ${kind === 'critique' ? 'fa-star' : 'fa-skull'}"></i> ${t(`bouton.${kind}`)}`
      b.addEventListener('click', async (ev) => {
        ev.preventDefault()
        try { await consequence(message, kind) } catch (e) { console.error(ID, e); ui.notifications.error(t('err.tirage')) }
      })
      zone.append(b)
    }
    el.querySelector('.message-content')?.append(zone)
  } catch (e) { console.error(ID, e) }
})

/* Mode automatique : seul le Gardien actif tire, une fois par critique ou maladresse nouvelle. */
Hooks.on('createChatMessage', async (message) => {
  try {
    if (!message.flags?.CoC7) return
    const n = compte(message)
    const avant = vus.get(message.id) ?? { critique: 0, maladresse: 0 }
    vus.set(message.id, n)
    if (!get('auto') || !game.user.isGM || game.users.activeGM?.id !== game.user.id) return
    const kind = n.maladresse > avant.maladresse ? 'maladresse' : (n.critique > avant.critique ? 'critique' : null)
    if (!kind) return
    if (game.dice3d?.waitFor3DAnimationByMessageID) { try { await game.dice3d.waitFor3DAnimationByMessageID(message.id) } catch (e) { /* rien */ } }
    await consequence(message, kind)
  } catch (e) { console.error(ID, e) }
})
Hooks.on('updateChatMessage', async (message) => {
  try {
    if (!message.flags?.CoC7 || message.flags?.[ID]) return
    const n = compte(message)
    const avant = vus.get(message.id) ?? { critique: 0, maladresse: 0 }
    vus.set(message.id, n)
    if (!get('auto') || !game.user.isGM || game.users.activeGM?.id !== game.user.id) return
    const kind = n.maladresse > avant.maladresse ? 'maladresse' : (n.critique > avant.critique ? 'critique' : null)
    if (kind) await consequence(message, kind)
  } catch (e) { console.error(ID, e) }
})
