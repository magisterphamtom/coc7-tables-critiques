/* Tables de conséquences : une table par compétence (ou famille de compétences) et par type de résultat.
   `motif` : expression régulière appliquée au nom de la compétence (sans accents, en minuscules).
   Les textes sont écrits pour fonctionner aussi bien en 1933 qu'en 2026 ; le Gardien reste libre de les adapter
   (les tables sont créées dans le monde et se modifient comme n'importe quelle table de Foundry). */

export const TABLES = [
  {
    cle: 'conduite', nom: 'Conduite et pilotage', motif: 'conduite|pilot|equitation|monte a cheval|cheval|conduire|automobile|bateau|navigation',
    critique: [
      'Le trajet est fluide, presque un plaisir : le véhicule file, et on gagne un bon quart d’heure sur le temps prévu.',
      'Une manœuvre audacieuse évite l’obstacle de justesse, et les passagers ne se rendent même pas compte du danger.',
      'Le conducteur repère un raccourci que personne ne connaît. Le groupe arrive avant tout le monde.',
      'La machine répond parfaitement : le conducteur sent exactement ce qu’elle peut encaisser, et il en tire un avantage durable pour la poursuite ou la fuite en cours.',
      'En roulant, il remarque un détail du paysage ou de la route (traces de pneus récentes, fumée, un véhicule abandonné) qui renseigne le groupe.',
      'Une économie de carburant inattendue : le réservoir tient bien plus longtemps que prévu.',
      'Le conducteur impressionne ses passagers : l’un d’eux, rassuré, bénéficie d’un dé bonus à son prochain jet de Persuasion ou de Santé mentale dans la scène.',
      'Il retombe sur ses pieds après un dérapage et distance un poursuivant sans effort.'
    ],
    maladresse: [
      'Crevaison, et pas de roue de secours en bon état. Il va falloir marcher, ou attendre.',
      'Le moteur cale ou fume à un très mauvais moment ; la réparation prendra une bonne heure.',
      'Un dérapage envoie le véhicule dans le fossé. Dégâts, et peut-être des blessures légères (1D3 points de vie) aux passagers.',
      'Le conducteur s’égare complètement. Le groupe perd plusieurs heures et arrive à destination après la tombée de la nuit.',
      'Le véhicule percute quelque chose (un animal, une barrière, un passant). Le conducteur va devoir s’expliquer.',
      'La panne d’essence ou de batterie survient en pleine nature, très loin de tout secours.',
      'Le conducteur se fait remarquer par les mauvaises personnes : un policier, un voisin curieux ou un poursuivant s’intéressent à lui.',
      'Un bruit de ferraille inquiétant : la transmission ou la direction est en train de lâcher. Prochain jet de Conduite à difficulté Difficile.'
    ]
  },
  {
    cle: 'discretion', nom: 'Discrétion, crochetage et filature', motif: 'discretion|crochet|passe-passe|dissimul|se cacher|filature|serrur',
    critique: [
      'Personne ne vous a vu et personne ne vous verra : le personnage peut même épier une conversation en toute sécurité.',
      'Il trouve une cachette parfaite, qui servira de refuge au groupe pour la suite de la scène.',
      'En se glissant dans les lieux, il remarque quelque chose que les gardes ou les occupants avaient laissé à découvert (clef, papier, passage).',
      'Le personnage observe le rythme des allées et venues et en tire un créneau sûr pour le groupe.',
      'La serrure ou l’alarme cède sans le moindre bruit, et rien n’indiquera jamais qu’on est passé par là.',
      'Il profite d’une diversion fortuite et dispose d’une véritable avance : +1 dé bonus au prochain jet de Discrétion du groupe.',
      'Le personnage se mêle si bien au décor qu’un témoin le décrira plus tard de façon complètement fausse.',
      'Il découvre au passage un objet laissé par un précédent visiteur indélicat.'
    ],
    maladresse: [
      'Un craquement, un objet qui tombe : tout le monde dans la pièce se tourne vers le personnage.',
      'Il laisse derrière lui un indice compromettant (empreinte, déchirure de vêtement, objet personnel).',
      'La serrure se bloque, ou le crochet casse dans le mécanisme : la porte est désormais impossible à ouvrir proprement.',
      'Le personnage déclenche un piège, une alarme ou un chien : il va falloir agir vite.',
      'Il se cache à un endroit où quelqu’un vient justement s’installer. Il est coincé là un long moment.',
      'Un voisin, un passant ou un serviteur le remarque et se souviendra de son visage.',
      'Il se blesse en forçant le passage (1D3 points de vie) et laisse du sang derrière lui.',
      'Une personne qu’il suit le repère et se met à le suivre à son tour sans qu’il s’en aperçoive tout de suite.'
    ]
  },
  {
    cle: 'psychologie', nom: 'Psychologie et empathie', motif: 'psychologie|psycho|empathie|lire les gens',
    critique: [
      'Le personnage perce l’intention réelle de son interlocuteur, avec une certitude qui ne trompe pas.',
      'Il comprend ce qui ronge la personne en face : une peur, un secret, un chagrin qui explique son comportement.',
      'Il devine ce que son interlocuteur cache, et peut même poser la question qui le fera craquer : +1 dé bonus au prochain jet social contre lui.',
      'Un détail minuscule (un geste, une hésitation, une phrase de trop) trahit un mensonge. Le personnage sait exactement où chercher.',
      'Il saisit en un regard les rapports de force entre les personnes présentes : qui commande, qui obéit, qui est effrayé.',
      'Le personnage devine l’état mental d’un compagnon : il sait si celui-ci tient bon ou s’il est près de craquer.',
      'Il sent que la personne en face dit la vérité, même quand tout dans la situation laisse croire le contraire.',
      'Sa lecture de la situation est si juste qu’il peut orienter la conversation là où il le souhaite.'
    ],
    maladresse: [
      'Le personnage est absolument convaincu de la mauvaise interprétation : il est sûr que son interlocuteur ment (ou dit vrai), et il se trompe.',
      'Sa perspicacité tourne à la paranoïa : il voit des intentions sournoises là où il n’y en a pas, et l’exprime maladroitement.',
      'Il touche un point douloureux de son interlocuteur sans le vouloir, et la conversation se ferme brutalement.',
      'Il est manipulé : l’autre devine qu’il l’observe, et lui fait croire exactement ce qu’il veut.',
      'Le personnage projette ses propres peurs sur l’autre : il en tire des conclusions erronées qu’il tiendra pour vraies.',
      'Il se persuade qu’un compagnon est en danger mental, et le lui dit devant tout le monde.',
      'Il s’attache de façon excessive à un détail sans importance et passe à côté de l’essentiel.',
      'Sa lecture est erronée mais très convaincante : les autres investigateurs le croiront d’abord, au risque de prendre une mauvaise décision.'
    ]
  },
  {
    cle: 'bibliotheque', nom: 'Bibliothèque et recherches', motif: 'bibliotheque|recherche|documentation|archive',
    critique: [
      'Le personnage tombe du premier coup sur le document décisif, soigneusement classé, comme si on l’attendait.',
      'Le texte principal est accompagné d’une note marginale ou d’une lettre glissée dans le volume qui donne une piste supplémentaire.',
      'Un employé ou un habitué passionné lui apporte un coup de main précieux et lui indique ce qu’il ne cherchait même pas.',
      'La recherche prend deux fois moins de temps que prévu.',
      'Le personnage trouve un ouvrage rare, ou une page arrachée ailleurs, qui change l’éclairage de son enquête.',
      'Il découvre le nom d’une personne qui a cherché la même chose avant lui, et qui est peut-être encore en vie.',
      'Une coupure de presse ou un dossier oublié confirme un détail que le groupe n’avait pas pu vérifier.',
      'Sa curiosité est récompensée : il met la main sur un second document utile, sans rapport direct, mais qui servira plus tard.'
    ],
    maladresse: [
      'Le volume est introuvable, prêté, volé ou déplacé, et nul ne sait où il est passé.',
      'Les recherches durent des heures pour rien, et on s’aperçoit trop tard qu’il fallait chercher ailleurs.',
      'Le personnage abîme un document précieux, et le bibliothécaire ou le conservateur le remarque.',
      'Il tombe sur un texte trompeur, qu’il croit authentique et qui l’égare dans la mauvaise direction.',
      'Quelqu’un d’autre s’intéresse aussi à ce sujet et surveille maintenant les demandes du personnage.',
      'Le personnage s’endort de fatigue sur les registres ; il se réveille très tard, et le lieu est sur le point de fermer.',
      'La lecture d’un passage dérangeant lui reste en tête : prochain jet de Santé mentale à difficulté Difficile ou cauchemar cette nuit.',
      'Il oublie son carnet de notes, ou perd les pages copiées, et doit tout recommencer.'
    ]
  },
  {
    cle: 'armes_feu', nom: 'Armes à feu', motif: 'arme.{0,4}a feu|armes? de poing|armes? d\'epaule|fusil|pistolet|carabine|mitraill|revolver|tir',
    critique: [
      'Le tir est d’une précision remarquable : en plus de toucher, il atteint exactement l’endroit visé (arme, main, moteur, serrure).',
      'La détonation fait fuir ou se jeter à terre tous les spectateurs : personne ne tentera de s’en prendre au tireur durant le round suivant.',
      'La cible est touchée à un point vital : les dégâts sont maximum, et elle ne se relèvera pas.',
      'Le tireur garde le contrôle de son arme : il peut tirer à nouveau immédiatement sans pénalité.',
      'Le tir ricoche de façon spectaculaire et touche un second adversaire, ou fait voler en éclats un élément du décor à son avantage.',
      'L’arme fonctionne parfaitement, et même ses défauts habituels (enrayage, recul) semblent disparaître pour le reste de la scène.',
      'Il touche sans tuer, comme il l’avait décidé : la cible est neutralisée, mais vivante et en état de parler.',
      'Le tir est si propre que le tireur n’a pas besoin de dépenser une balle de plus pour ce combat (munitions non décomptées).'
    ],
    maladresse: [
      'L’arme s’enraye : il faut un round entier pour la remettre en état.',
      'Le coup part trop tôt ou dans une mauvaise direction, et touche un allié ou un objet de valeur.',
      'Le tireur se blesse en tirant (recul, éclat, brûlure) : 1D3 points de vie perdus.',
      'Il n’avait plus de munitions et ne s’en était pas rendu compte : l’arme claque à vide, le moment le plus mal choisi.',
      'La détonation attire l’attention, et des gens (police, voisins, créatures) arrivent bientôt sur les lieux.',
      'L’arme lui échappe des mains, ou glisse hors de portée, et tombe quelque part dans l’agitation.',
      'Le tir ricoche dangereusement : la balle revient vers le tireur ou ses compagnons.',
      'L’arme, mal entretenue ou défectueuse, est désormais hors d’usage et ne sera plus utilisable avant une réparation sérieuse.'
    ]
  },
  {
    cle: 'combat', nom: 'Combat rapproché', motif: 'bagarre|combat|corps a corps|arme blanche|arts? martia|escrime|lutte|boxe|couteau|epee|massue|hache',
    critique: [
      'Le coup est porté avec une telle justesse que l’adversaire est déséquilibré : il perd son prochain round ou tombe à terre.',
      'Le personnage désarme son adversaire d’un seul geste, et l’arme vole à quelques mètres.',
      'La violence du coup impressionne : les autres adversaires hésitent, et il gagne un round de répit.',
      'Il profite du mouvement pour se replacer idéalement : le prochain coup du groupe bénéficie d’un dé bonus.',
      'Il met son adversaire hors de combat sans le tuer, exactement comme il le souhaitait.',
      'Un coup enchaîne sur un second : le personnage attaque une deuxième fois sans dépenser son action.',
      'Il s’empare de l’arme, ou d’un objet tombé de la poche de son adversaire, au passage.',
      'Le coup est si remarquable qu’on s’en souviendra au village : sa réputation (bonne ou terrifiante) grandit.'
    ],
    maladresse: [
      'Le personnage glisse, trébuche, et se retrouve au sol à la merci de son adversaire.',
      'L’arme lui échappe ou se casse. Il se retrouve les mains nues.',
      'Il frappe un allié, ou un objet fragile, au lieu de sa cible.',
      'Il se blesse tout seul (1D3 points de vie), de façon humiliante.',
      'Il se retrouve acculé contre un mur ou un obstacle, sans possibilité de reculer.',
      'Son adversaire retourne le coup contre lui : l’attaque suivante contre le personnage bénéficie d’un dé bonus.',
      'Le bruit de la bagarre attire du monde, et pas du bon.',
      'Il perd son souffle, ou se foule quelque chose : tous les jets physiques du personnage ont un dé malus jusqu’à la fin de la scène.'
    ]
  },
  {
    cle: 'social', nom: 'Compétences sociales', motif: 'baratin|persuasion|charme|intimidation|marchand|eloquence|commandement|diplomatie',
    critique: [
      'Le personnage trouve les mots exacts : son interlocuteur est convaincu, et même flatté de l’avoir été.',
      'Il obtient bien plus que ce qu’il demandait : une information supplémentaire, une faveur, un contact utile.',
      'Son assurance est telle que les personnes présentes se rangent à son avis sans discuter.',
      'Son interlocuteur devient un allié provisoire, prêt à témoigner en sa faveur ou à lui rendre un service ultérieur.',
      'Il impressionne tellement la personne qu’elle lui confie un secret, sans qu’il ait eu à le demander.',
      'Il laisse une impression durable : prochain jet social avec cette personne (ou son entourage) avec un dé bonus.',
      'La discussion tourne à l’avantage du personnage de façon éclatante, et ses compagnons en profitent.',
      'Il obtient ce qu’il voulait en un temps record, et sans que personne ne soupçonne la manœuvre.'
    ],
    maladresse: [
      'Le personnage dit exactement la chose qu’il ne fallait pas dire, et la scène vire à l’aigre.',
      'Son interlocuteur le prend pour un imposteur ou un fou, et sa réputation en souffre dans les environs.',
      'Il offense gravement quelqu’un de proche de la personne qu’il cherche à convaincre.',
      'Sa tentative est si maladroite que l’interlocuteur se méfiera désormais de tous les personnages du groupe.',
      'Il se contredit devant témoins : un mensonge antérieur est mis au jour.',
      'Il est surpris à mentir par quelqu’un d’important, qui garde l’information pour plus tard.',
      'L’interlocuteur se met en colère : cri, claque, menace de faire intervenir la police ou des hommes de main.',
      'Il promet quelque chose qu’il ne pourra pas tenir, et ne s’en rend compte qu’après coup.'
    ]
  },
  {
    cle: 'perception', nom: 'Perception et pistage', motif: 'ecouter|trouver objet|objet cache|pister|vigilance|reperer|observer|fouille',
    critique: [
      'Le personnage remarque tous les détails de la scène, même les plus infimes : le Gardien lui donne un indice supplémentaire.',
      'Il repère une présence ou un danger avant tout le monde, et prévient le groupe à temps.',
      'Une trace, un bruit ou une odeur lui révèle bien plus que prévu (qui est passé, quand, dans quel état).',
      'Il trouve au passage un objet ou un passage secret que personne n’avait cherché.',
      'Il saisit une bribe de conversation, un nom ou un chiffre, qui prendra de l’importance plus tard.',
      'Il reconstitue ce qui s’est passé ici avec une précision déconcertante.',
      'Il remarque que quelque chose cloche dans le décor : un objet déplacé, un mur trop récent, un silence anormal.',
      'Le personnage sait, avec certitude, que quelqu’un d’autre a fouillé le lieu avant eux, et peut deviner par où.'
    ],
    maladresse: [
      'Le personnage est convaincu d’avoir tout vérifié, et il manque pourtant l’essentiel.',
      'Il prend une fausse piste pour la bonne, et le groupe perd du temps.',
      'Il imagine voir ou entendre quelque chose qui n’existe pas : sa fausse alerte met le groupe sur les nerfs.',
      'Il touche ou déplace sans le vouloir un indice important, qui est désormais abîmé ou inutilisable.',
      'Il ne remarque pas qu’on le regarde, ou qu’on le suit depuis un moment.',
      'Sa curiosité l’amène à un endroit dangereux : sol instable, animal, personne mal intentionnée.',
      'Il s’éloigne du groupe sans s’en rendre compte et se retrouve seul à un mauvais endroit.',
      'Il est distrait par quelque chose de sans importance et rate un événement décisif juste à côté.'
    ]
  },
  {
    cle: 'medecine', nom: 'Soins et médecine', motif: 'premiers soins|medecine|soins|chirurgie|pharmacie|psychanalyse|diagnostic',
    critique: [
      'Les soins sont d’une efficacité remarquable : le patient récupère le maximum de points de vie possible.',
      'Le personnage devine la cause réelle de l’état du patient (poison, maladie, traumatisme) du premier coup.',
      'Le patient, rassuré, retrouve de lui-même son calme : il regagne 1 point de Santé mentale.',
      'L’intervention est si propre qu’elle ne laissera presque pas de cicatrice et ne nécessitera aucun suivi.',
      'Le soignant tire parti du matériel de fortune de façon ingénieuse, et il pourra recommencer avec la même méthode à l’avenir.',
      'Il remarque en examinant le patient un détail important (marque sur la peau, odeur, symptôme étrange) qui nourrit l’enquête.',
      'Le patient se rétablit si vite que le groupe gagne une demi-journée de repos.',
      'Le patient, reconnaissant, partage une information ou rend un service au soignant.'
    ],
    maladresse: [
      'Le geste est mal fait : le patient perd 1D3 points de vie supplémentaires et souffre atrocement.',
      'Le personnage se trompe de diagnostic, et le traitement aggrave l’état du patient.',
      'Il manque de matériel ou de produits au pire moment, et ne s’en aperçoit qu’en pleine opération.',
      'Il perd son sang-froid et laisse le patient mourir, ou presque, sous ses yeux : Santé mentale en jeu (1/1D3).',
      'Il s’infecte ou se blesse lui-même en soignant.',
      'La plaie s’infecte : prochain jet de Constitution du patient à difficulté Difficile, ou fièvre pendant plusieurs jours.',
      'Le patient réagit de façon inattendue au traitement (allergie, panique, délire).',
      'Il réalise trop tard qu’il vient d’administrer un produit inapproprié, avec des conséquences à retardement.'
    ]
  },
  {
    cle: 'savoir', nom: 'Savoirs et sciences', motif: 'occultisme|histoire|archeolog|anthropolog|mythe|langue|droit|geolog|astronom|biolog|chimie|pharmac|sciences?|naturel|electr|mecanique|informatique|comptabilite|art |beaux-arts|photograph',
    critique: [
      'Le personnage fait immédiatement le rapprochement qui manquait : tout s’éclaire, et le Gardien donne une information clé.',
      'Il se souvient d’une anecdote, d’un précédent ou d’un cas similaire qui oriente efficacement le groupe.',
      'Il explique le phénomène de façon si claire que ses compagnons le comprennent aussi : +1 dé bonus à leur prochain jet lié à ce sujet.',
      'Il reconnaît immédiatement l’authenticité (ou la contrefaçon) de l’objet, du texte ou du lieu étudié.',
      'Il établit un lien entre deux éléments éloignés de l’enquête, et révèle un fil conducteur.',
      'Il connaît quelqu’un, collègue ou ancien professeur, qui peut l’aider et qu’il pourra contacter facilement.',
      'Ses connaissances lui permettent de prédire ce qui va probablement se produire dans les prochaines heures.',
      'Il découvre que ce qu’on lui présente comme un mythe contient un fond de vérité inquiétant, et sait où creuser pour le confirmer.'
    ],
    maladresse: [
      'Il est absolument certain de ce qu’il avance, et il se trompe complètement. Les autres se fieront à lui.',
      'Il confond deux choses voisines et en tire une conclusion dangereuse.',
      'Ses explications trop longues ennuient ou agacent les personnes présentes : son interlocuteur se ferme.',
      'Il prononce ou lit à voix haute quelque chose qu’il aurait mieux valu laisser tranquille.',
      'Il vexe un spécialiste reconnu en le contredisant, et se fait un ennemi dans le milieu.',
      'La vérité qu’il découvre est trop dérangeante : il perd 1 point de Santé mentale pour avoir compris.',
      'Il endommage un objet ou un document précieux en le manipulant mal.',
      'Il ramène un faux souvenir qui s’avérera très gênant dans le courant de l’enquête.'
    ]
  },
  {
    cle: 'physique', nom: 'Prouesses physiques', motif: 'grimper|sauter|nager|lancer|esquive|natation|escalade|course|saut|equilibre|force',
    critique: [
      'L’exploit est exécuté avec une aisance spectaculaire : les spectateurs en restent bouche bée.',
      'Le personnage fait plus que prévu : il gagne du temps, de la distance, ou aide un compagnon au passage.',
      'Le mouvement le met en position avantageuse pour la suite : +1 dé bonus à sa prochaine action physique.',
      'Il repère, depuis sa position, un détail inaccessible aux autres (vue plongeante, passage, danger).',
      'Il évite totalement l’accident qui le menaçait, et protège aussi la personne la plus proche.',
      'Il récupère, d’un geste, un objet qui était tombé ou en danger.',
      'Il parvient à franchir l’obstacle sans bruit ni trace, comme si de rien n’était.',
      'Son geste inspire l’équipe : un compagnon reprend courage (+1 point de chance pour lui, au choix du Gardien).'
    ],
    maladresse: [
      'Le personnage glisse, tombe lourdement : 1D3 points de vie perdus et grand bruit.',
      'Il se foule une cheville ou se déboîte une épaule : tous ses jets physiques sont à difficulté Difficile jusqu’à ce qu’il soit soigné.',
      'Il lâche ou perd un objet important (arme, lampe, sac) pendant l’effort.',
      'Il entraîne un compagnon dans sa chute, ou l’expose au danger.',
      'Il se retrouve dans une position impossible : suspendu, coincé, ou à demi enfoncé dans la boue ou la glace.',
      'Le support cède sous son poids (branche, échelle, planche), et il faut l’aide des autres pour le sortir de là.',
      'Il y laisse un vêtement, un équipement, ou un bout de peau : il laissera des traces visibles.',
      'Il ressent une douleur persistante : prochain jet de Constitution ou de Force à difficulté Difficile.'
    ]
  }
]

/** Tables de secours, pour une compétence qui n’entre dans aucune famille ci-dessus. */
export const GENERIQUE = {
  cle: 'generique', nom: 'Compétence quelconque',
  critique: [
    'La réussite est éclatante : l’action se déroule mieux que prévu, et le Gardien accorde un bénéfice supplémentaire.',
    'Le personnage gagne un temps précieux, sans avoir l’air d’y toucher.',
    'Ses compagnons profitent de son geste : +1 dé bonus à la prochaine action du groupe dans la même scène.',
    'Il découvre au passage un détail utile que personne n’avait remarqué.',
    'L’action laisse une excellente impression sur un témoin, qui s’en souviendra.',
    'Le résultat est durable : le personnage n’aura pas besoin de recommencer.',
    'Il tire de cette réussite un regain de confiance : +1 point de chance, ou un point de Santé mentale regagné, au choix du Gardien.',
    'Le hasard lui sourit une seconde fois : un objet ou une information utile se trouve à sa portée.'
  ],
  maladresse: [
    'L’action échoue de la pire manière possible, et le Gardien en fait une complication immédiate.',
    'Le personnage perd un temps considérable à réparer sa propre erreur.',
    'Un objet ou un outil nécessaire est abîmé, perdu ou cassé.',
    'Un témoin le remarque en train d’échouer, et s’en souviendra.',
    'Le personnage se blesse légèrement (1D3 points de vie) ou se ridiculise gravement.',
    'Un compagnon se retrouve touché par les conséquences de la maladresse.',
    'Une complication extérieure (bruit, visite, intempérie) survient à ce moment précis.',
    'Il s’obstine : prochain essai de la même action à difficulté Difficile.'
  ]
}
