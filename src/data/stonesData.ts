import { StoneProduct, ProjectShowcase, Testimonial, FAQItem } from '../types';

export const COMPANY_INFO = {
  name: "NEGOCE Decor House SARL",
  tagline: "Vente de Pierres Décoratives • Particuliers & Entreprises",
  directorQuote: "Nous faisons dans la vente des pierres décoratives pour particuliers et entreprises, avec une seule mission : faire reconnaître la valeur authentique et la noblesse de la pierre au monde entier, tout en bâtissant une relation de confiance durable avec notre clientèle.",
  description: "Spécialiste au Cameroun de la vente et de la fourniture de pierres décoratives nobles, barrettes de parement naturel, quartzites impériales, ardoises et dallages pour villas, concessions, résidences et projets d'entreprises.",
  phone: "+237 6 99 00 00 00",
  phoneRaw: "+237699000000",
  whatsapp: "+237 6 77 00 00 00",
  whatsappRaw: "237677000000",
  email: "contact@negoce-decorhouse.com",
  address: "Showroom & Dépôts : Douala (Bassa / Bonabéri) & Yaoundé (Bastos / Axe Nsimalen), Cameroun",
  workingHours: "Lun - Sam : 07h30 - 18h30 (Service Chantiers 24/7 sur WhatsApp)",
  rcNumber: "RC/DLA/2021/B/1842 - SARL au capital de 10.000.000 FCFA",
};

export const STONES_CATALOG: StoneProduct[] = [
  {
    id: "quartzite-dore-miel",
    name: "Quartzite Impérial Doré & Miel",
    subtitle: "Barrettes éclatantes aux reflets dorés et ambrés scintillants",
    category: "barrettes",
    categoryLabel: "Barrettes de parement",
    primaryColor: "dore_miel",
    colorLabel: "Doré Miel & Ambre",
    colorHex: "#d8a151",
    texturePattern: "Fissiles naturelles, relief texturé avec micro-paillettes de quartz",
    description: "Une pierre d'exception qui capte et réfléchit la lumière naturelle. Ses nuances de miel chaud et d'or apportent une chaleur incomparable aux façades et séjours.",
    longDescription: "Extraite et sélectionnée minutieusement, cette quartzite dorée présente des strates naturelles riches en minéraux réflecteurs. Taillée en barrettes calibrées faciles à poser, elle résiste aux fortes pluies tropicales, aux UV intenses et ne se décolore jamais. Idéale pour les façades de villas contemporaines, les cheminées et les murs d'accent intérieurs.",
    features: [
      "100% Quartzite naturelle inaltérable",
      "Éclat scintillant sous la lumière du soleil",
      "Résistance extrême aux intempéries & à l'humidité",
      "Calibrage précis pour pose avec ou sans joints apparents"
    ],
    dimensions: "Longueur libre 15 à 40 cm x Hauteur 5 à 7 cm",
    thickness: "1,5 à 3 cm de relief",
    weight: "~42 kg / m²",
    origin: "Carrières sélectionnées de haute densité",
    recommendedUsages: ["facade_exterieure", "interieur_salon", "piliers_clotures", "cheminee_decoration"],
    usageLabels: ["Façade Villa", "Mur Salon", "Piliers d'entrée", "Cheminée"],
    finishes: ["Face naturelle brute", "Chants clivés à la main"],
    priceRange: "22 000 - 28 000 FCFA / m²",
    imageUrl: "/images/pierre-doree-miel.jpeg",
    textureZoomUrl: "/images/pierre-doree-miel.jpeg",
    realPhotoContext: "Photo correspondant aux barrettes dorées ocre en panneaux d'échantillons",
    inStock: true,
    popular: true
  },
  {
    id: "ardoise-graphite-argent",
    name: "Ardoise Sauvage Graphite & Argent",
    subtitle: "Barrettes clivées gris anthracite aux nuances métalliques et bleutées",
    category: "barrettes",
    categoryLabel: "Barrettes de parement",
    primaryColor: "gris_graphite",
    colorLabel: "Gris Graphite & Argent",
    colorHex: "#52575d",
    texturePattern: "Feuilletage naturel soyeux, arêtes vives, tonalité minérale brute",
    description: "Le choix par excellence des architectures contemporaines et épurées. Une couleur graphite profonde rehaussée de subtils reflets argentés.",
    longDescription: "L'Ardoise Sauvage Graphite offre une élégance moderne et sobre. Grâce à sa structure sédimentaire dense, elle forme un bouclier thermique et esthétique sur les murs extérieurs comme dans les salles d'eau ou salons prestigieux. Parfaite pour créer un contraste saisissant avec les enduits clairs ou le bois noble.",
    features: [
      "Teinte naturelle anthracite intense et intemporelle",
      "Imperméable par nature, insensible aux moisissures",
      "Excellente tenue thermique et phonique",
      "Effet 3D prononcé grâce aux reliefs d'épaisseurs variées"
    ],
    dimensions: "Longueur libre 20 à 45 cm x Hauteur 5 cm",
    thickness: "2 à 3,5 cm",
    weight: "~45 kg / m²",
    origin: "Gisements d'ardoise clivée haute dureté",
    recommendedUsages: ["facade_exterieure", "interieur_salon", "piliers_clotures"],
    usageLabels: ["Façade & Soubassement", "Mur TV & Salon", "Clôture Prestige"],
    finishes: ["Clivage traditionnel", "Bords sciés rectilignes"],
    priceRange: "24 000 - 30 000 FCFA / m²",
    imageUrl: "/images/pierre-graphite.jpeg",
    textureZoomUrl: "/images/stock-graphite-dore.jpeg",
    realPhotoContext: "Photo correspondant aux panneaux de barrettes gris graphite bleuté",
    inStock: true,
    popular: true
  },
  {
    id: "pierre-ocre-terre-sienne",
    name: "Grès Solaire Ocre & Terre de Sienne",
    subtitle: "Pierres chaleureuses aux tonalités terracotta, saumon et rose volcanique",
    category: "briquettes",
    categoryLabel: "Briquettes & Barrettes",
    primaryColor: "ocre_rose",
    colorLabel: "Ocre Rouge & Terre de Sienne",
    colorHex: "#b86248",
    texturePattern: "Grain fin velouté, marbrures chaleureuses et nuances terre cuite",
    description: "Une palette vibrante inspirée des plus beaux paysages minéraux. Elle insuffle une convivialité naturelle et une noblesse authentique.",
    longDescription: "Ces briquettes de parement en grès sédimentaire révèlent des dégradés naturels fascinants, allant de l'ocre doré au terracotta profond. Très prisée pour les porches d'entrée, les piliers de clôture et les cours intérieures, elle s'harmonise idéalement avec la végétation luxuriante.",
    features: [
      "Nuances naturelles riches et non répétitives",
      "Texture douce et adhérente à fort pouvoir décoratif",
      "Insensible au ruissellement et aux UV",
      "Apporte une âme et un cachet chaleureux instantané"
    ],
    dimensions: "Longueur 18 à 35 cm x Hauteur 6 cm",
    thickness: "2 à 3 cm",
    weight: "~40 kg / m²",
    origin: "Strates sédimentaires sélectionnées",
    recommendedUsages: ["facade_exterieure", "piliers_clotures", "terrasse_piscine"],
    usageLabels: ["Piliers de porche", "Façades & Cours", "Murs de soutènement"],
    finishes: ["Face éclatée naturelle", "Coins d'angle disponibles"],
    priceRange: "21 000 - 26 000 FCFA / m²",
    imageUrl: "/images/pierre-ocre-rose.jpeg",
    textureZoomUrl: "/images/realisation-porche.jpeg",
    realPhotoContext: "Photo correspondant aux panneaux de pierres roses et ocre terre de sienne",
    inStock: true
  },
  {
    id: "dallage-opus-incertum",
    name: "Dallage Opus Incertum Méditerranée",
    subtitle: "Grandes dalles polygonales de pierre naturelle pour terrasses et abords de piscine",
    category: "opus",
    categoryLabel: "Dallage & Sol extérieur",
    primaryColor: "panache_naturel",
    colorLabel: "Ocre, Crème & Beige Sablé",
    colorHex: "#d5b88a",
    texturePattern: "Formes polygonales asymétriques, surface bouchardée ou clivée antidérapante",
    description: "L'art du pavage intemporel. Crée des terrasses somptueuses, des allées de jardin paysagères et des plages de piscine sécurisées et fraîches sous le pied.",
    longDescription: "L'Opus Incertum est la signature des domaines de prestige. Chaque dalle est une pièce unique qui s'assemble selon le savoir-faire du maître paveur. La surface reste agréablement tempérée sous le soleil et offre une adhérence antidérapante naturelle, même mouillée. Ne craint ni les chocs, ni l'eau stagnante, ni les produits de piscine.",
    features: [
      "Esthétique naturelle organique ultra-haut de gamme",
      "Surface antidérapante naturelle (sécurité pieds nus)",
      "Résistance exceptionnelle aux charges de passage",
      "Pose sur chape béton ou lit de sable stabilisé"
    ],
    dimensions: "Formes libres polygonales 25 à 60 cm de diamètre",
    thickness: "2,5 à 4 cm",
    weight: "~55 kg / m²",
    origin: "Plateaux rocheux calcaires et quartzitiques",
    recommendedUsages: ["terrasse_piscine", "facade_exterieure"],
    usageLabels: ["Terrasse de villa", "Plage de piscine", "Allées & Verandas", "Patios"],
    finishes: ["Face naturelle antidérapante", "Arêtes brutes"],
    priceRange: "26 000 - 34 000 FCFA / m²",
    imageUrl: "/images/realisation-terrasse.jpeg",
    textureZoomUrl: "/images/realisation-terrasse.jpeg",
    realPhotoContext: "Photo correspondant à la terrasse en dalles opus incertum ocre et crème",
    inStock: true,
    popular: true
  },
  {
    id: "quartzite-blanc-cristal",
    name: "Quartzite Pur Blanc Cristal & Argent",
    subtitle: "Barrettes claires immaculées aux inclusions cristallines réfléchissantes",
    category: "barrettes",
    categoryLabel: "Barrettes de parement",
    primaryColor: "blanc_cristal",
    colorLabel: "Blanc Pur & Reflets Argent",
    colorHex: "#e2ded7",
    texturePattern: "Cristallisations serrées, blancheur lumineuse, texture légèrement rugueuse",
    description: "Une pureté minérale absolue. Illumine les espaces sombres et confère une modernité sculpturale aux façades épurées et intérieurs design.",
    longDescription: "Composée de quartz pur à plus de 95%, cette pierre possède une blancheur naturelle traversée de micro-cristaux qui étincellent sous l'éclairage. Elle n'absorbe pas les salissures et s'auto-nettoie sous les pluies torrentielles. Un choix privilégié pour les suites parentales, les spas et les villas de standing.",
    features: [
      "Pureté cristalline naturelle sans colorant",
      "Effet d'agrandissement d'espace et de luminosité",
      "Résistance totale aux acides ménagers et aux moisissures",
      "Élégance architecturale minimaliste et raffinée"
    ],
    dimensions: "Longueur libre 15 à 40 cm x Hauteur 5 à 6 cm",
    thickness: "1,8 à 3 cm",
    weight: "~43 kg / m²",
    origin: "Veines de quartz pur de haute montagne",
    recommendedUsages: ["facade_exterieure", "interieur_salon", "cheminee_decoration"],
    usageLabels: ["Façade Moderne", "Mur d'Accent Salon", "Salle de Bain & Spa"],
    finishes: ["Clivé diamant", "Angles massifs sur mesure"],
    priceRange: "25 000 - 32 000 FCFA / m²",
    imageUrl: "/images/pierre-blanche.jpeg",
    textureZoomUrl: "/images/pierre-blanche.jpeg",
    realPhotoContext: "Photo correspondant aux barrettes de parement blanches alignées sur le sol",
    inStock: true
  },
  {
    id: "parement-panache-villa-royale",
    name: "Mixte Multicolore Villa Royale",
    subtitle: "Harmonie panachée de quartzites dorées, ardoises et grès ocre",
    category: "barrettes",
    categoryLabel: "Barrettes & Briquettes",
    primaryColor: "panache_naturel",
    colorLabel: "Panaché Terroir & Or",
    colorHex: "#a78257",
    texturePattern: "Composition polychrome variée créant un tableau vivant et organique",
    description: "La mosaïque naturelle par excellence. Une symphonie de tons chauds et froids qui donne immédiatement l'allure d'un domaine seigneurial.",
    longDescription: "Ce mélange savamment dosé en carrière associe des barrettes de quartzite dorée, d'ardoise grise et de grès terre cuite. Utilisé sur des façades entières de résidences à étages ou pour habiller des piliers massifs d'entrée, il masque parfaitement les petites imperfections architecturales et crée une impression de robustesse éternelle.",
    features: [
      "Mélange équilibré pré-trié pour pose immédiate",
      "Évolution des teintes au gré de la lumière du jour",
      "Masque la poussière et les salissures extérieures",
      "Idéal pour les grands chantiers résidentiels et hôteliers"
    ],
    dimensions: "Longueur libre 15 à 45 cm x Hauteur 5 à 7 cm",
    thickness: "2 à 3,5 cm",
    weight: "~44 kg / m²",
    origin: "Assemblage de carrières premium",
    recommendedUsages: ["facade_exterieure", "piliers_clotures", "interieur_salon"],
    usageLabels: ["Façade Complète Villa", "Piliers Majestueux", "Murs de Clôture"],
    finishes: ["Clivage naturel rustique chic"],
    priceRange: "23 000 - 29 000 FCFA / m²",
    imageUrl: "/images/realisation-facade.jpeg",
    textureZoomUrl: "/images/realisation-facade.jpeg",
    realPhotoContext: "Photo correspondant à la façade de la maison en cours de pose sur échafaudage",
    inStock: true,
    popular: true
  }
];

export const REAL_PROJECTS: ProjectShowcase[] = [
  {
    id: "villa-prestige-bastogne",
    title: "Habillage Intégral Façade Villa Prestige",
    clientType: "particulier",
    category: "Résidentiel Haut Standing",
    location: "Quartier Bastos / Golf, Yaoundé",
    surface: "380 m² de parement",
    stoneUsed: "Mixte Multicolore Villa Royale & Barrettes Dorées",
    stoneId: "parement-panache-villa-royale",
    description: "Habillage complet des 2 niveaux de la villa avec soubassement renforcé et encadrements de fenêtres en barrettes de pierre naturelle. Rendu spectaculaire sous le soleil couchant.",
    imageUrl: "/images/realisation-facade.jpeg",
    galleryImages: [
      "/images/realisation-facade.jpeg",
      "/images/stock-pierres.jpeg"
    ],
    year: "2026",
    highlights: ["Isolation thermique naturelle", "Pose sans joint visible", "Garantie décennale pierre"]
  },
  {
    id: "piliers-porche-bonapriso",
    title: "Piliers de Porche & Murs d'Accueil",
    clientType: "particulier",
    category: "Architecture Entrée & Clôture",
    location: "Bonapriso, Douala",
    surface: "95 m²",
    stoneUsed: "Quartzite Impérial Doré & Miel",
    stoneId: "quartzite-dore-miel",
    description: "Rehaussement spectaculaire des colonnes d'entrée et de la marquise en barrettes de quartzite dorée taillée sur mesure. Donnant un cachet chaleureux et moderne dès le portail.",
    imageUrl: "/images/realisation-porche.jpeg",
    galleryImages: [
      "/images/pierre-doree-miel.jpeg"
    ],
    year: "2026",
    highlights: ["Angles découpés en biseau", "Résistance à l'air marin & humidité", "Mise en valeur nocturne par spots LED"]
  },
  {
    id: "terrasse-piscine-kribi",
    title: "Dallage Terrasse & Plage de Piscine Privée",
    clientType: "particulier",
    category: "Aménagement Extérieur & Piscine",
    location: "Bord de mer, Kribi",
    surface: "240 m²",
    stoneUsed: "Dallage Opus Incertum Méditerranée",
    stoneId: "dallage-opus-incertum",
    description: "Terrasse panoramique face à l'océan réalisée en dalles polygonales de pierre naturelle ocre et crème avec joints beiges hydrofuges.",
    imageUrl: "/images/realisation-terrasse.jpeg",
    galleryImages: [
      "/images/realisation-terrasse.jpeg"
    ],
    year: "2025",
    highlights: ["Surface antidérapante certifiée", "Résistance au sel et à l'eau de mer", "Fraîcheur préservée sous le soleil"]
  },
  {
    id: "residence-affaires-akwa",
    title: "Façade Siège Corporatif & Hall d'Accueil",
    clientType: "entreprise",
    category: "Projet Professionnel & Tertiaire",
    location: "Boulevard de la Liberté, Akwa - Douala",
    surface: "650 m²",
    stoneUsed: "Ardoise Sauvage Graphite & Argent",
    stoneId: "ardoise-graphite-argent",
    description: "Fourniture en gros volume et coordination de pose pour un complexe de bureaux de standing. Contraste majestueux entre les baies vitrées teintées et le parement graphite.",
    imageUrl: "/images/pierre-graphite.jpeg",
    galleryImages: [
      "/images/stock-graphite-dore.jpeg"
    ],
    year: "2026",
    highlights: ["Livraison cadencée sur 3 semaines", "Contrôle qualité strict au m²", "Fiches techniques conformes aux normes BTP"]
  },
  {
    id: "resort-eco-lodge",
    title: "Éco-Lodge & Pavillons Hôteliers de Luxe",
    clientType: "entreprise",
    category: "Hôtellerie & Restauration",
    location: "Région Ouest / Bafoussam",
    surface: "1 200 m²",
    stoneUsed: "Grès Ocre Terre de Sienne & Barrettes Panachées",
    stoneId: "pierre-ocre-terre-sienne",
    description: "Aménagement minéral complet de 12 lodges individuels, du restaurant panoramique et des murets de soutènement paysagers.",
    imageUrl: "/images/pierre-ocre-rose.jpeg",
    galleryImages: [
      "/images/realisation-porche.jpeg"
    ],
    year: "2025",
    highlights: ["Harmonie totale avec la nature", "Zéro entretien requis sur 50 ans", "Tarif dégressif grand compte"]
  },
  {
    id: "stockage-carriere-approvisionnement",
    title: "Extraction, Calibrage & Hub Logistique",
    clientType: "entreprise",
    category: "Carrière & Approvisionnement",
    location: "Dépôt Central & Sites d'Extraction",
    surface: "+15 000 m² en stock permanent",
    stoneUsed: "Toutes gammes en barrettes coniques et palettes",
    stoneId: "quartzite-blanc-cristal",
    description: "Stockage régulé en pyramides d'aération et palettes conditionnées prêtes pour expédition rapide sur tous les chantiers du Cameroun et de la sous-région CEMAC.",
    imageUrl: "/images/stock-pierres.jpeg",
    galleryImages: [
      "/images/stock-graphite-dore.jpeg"
    ],
    year: "2026",
    highlights: ["Capacité d'approvisionnement continue", "Conditionnement sécurisé sur palettes cerclées", "Flotte de transport dédiée"]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    author: "M. Dieudonné Ebanda",
    role: "Propriétaire de Villa",
    companyOrLocation: "Bastos, Yaoundé",
    clientType: "particulier",
    rating: 5,
    content: "La transformation de notre villa a dépassé toutes nos attentes. Le quartzite doré capte la lumière du soleil d'une manière incroyable. L'équipe de NEGOCE Decor House nous a conseillé sur le métrage exact et la livraison est arrivée pile à l'heure sur le chantier.",
    project: "Façade & Clôture 320 m²",
    avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80"
  },
  {
    id: "2",
    author: "Arch. Marcelle Tchakounté",
    role: "Architecte DPLG & Maître d'Œuvre",
    companyOrLocation: "Cabinet Atelier Minéral & BTP",
    clientType: "entreprise",
    rating: 5,
    content: "En tant qu'architecte, j'exige une régularité de calibrage irréprochable pour mes clients de prestige. NEGOCE Decor House est le partenaire le plus sérieux : pas de surprises sur les nuances, pierres 100% nobles et service technique très réactif.",
    project: "Immeuble de bureaux & 4 Villas",
    avatarUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80"
  },
  {
    id: "3",
    author: "Ing. Samuel Nguemo",
    role: "Directeur de Projets Immobiliers",
    companyOrLocation: "Promoteur Immobilier Riviera",
    clientType: "entreprise",
    rating: 5,
    content: "Sur un programme de 18 résidences sécurisées, nous avions besoin de plus de 2 500 m² de parement naturel. Les tarifs dégressifs et la capacité logistique de NEGOCE Decor House SARL ont fait la différence. Zéro retard de livraison.",
    project: "Programme Résidentiel 2 500 m²",
    avatarUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80"
  }
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: "faq-1",
    question: "La pierre naturelle résiste-t-elle au climat tropical et aux fortes pluies ?",
    answer: "Absolument. Contrairement aux plaquettes de plâtre ou aux carrelages synthétiques qui finissent par cloquer ou noircir, nos quartzites, grès et ardoises sont des roches massives millénaires. Elles sont naturellement étanches, résistent aux fortes chaleurs, aux pluies acides et aux rayons UV sans jamais perdre leur éclat.",
    category: "produit"
  },
  {
    id: "faq-2",
    question: "Quelle est la différence entre vos pierres et les imitations en ciment / faïence ?",
    answer: "La pierre naturelle offre une texture unique au toucher, un relief 3D authentique et une infinité de reflets minéraux impossibles à reproduire artificiellement. De plus, elle ne s'altère pas avec le temps : elle acquiert une patine encore plus noble après 10, 20 ou 50 ans sans aucun besoin de peinture ou de vernis coûteux.",
    category: "produit"
  },
  {
    id: "faq-3",
    question: "Comment se déroule la livraison sur nos chantiers (Douala, Yaoundé, autres villes) ?",
    answer: "Nous assurons la livraison directe sur vos chantiers partout au Cameroun (Douala, Yaoundé, Kribi, Bafoussam, Garoua...) et dans la sous-région CEMAC. Les pierres sont soigneusement conditionnées sur palettes cerclées ou en vrac sécurisé par camion grue ou camion benne selon l'accessibilité du site.",
    category: "livraison"
  },
  {
    id: "faq-4",
    question: "Proposez-vous également la pose ou des artisans partenaires qualifiés ?",
    answer: "Oui ! En plus de la fourniture des matériaux de premier choix, nous disposons d'un réseau de maîtres-poseurs partenaires formés aux techniques de pose de barrettes clivées, opus incertum et briquettes. Nous pouvons inclure la pose dans votre devis global.",
    category: "pose"
  },
  {
    id: "faq-5",
    question: "Comment calculer la quantité de pierre nécessaire pour mon projet ?",
    answer: "Multipliez simplement la longueur par la hauteur de vos murs pour obtenir la surface en m². Nous recommandons d'ajouter une marge de sécurité de 5% à 8% pour les découpes d'angles et d'encadrements. Notre simulateur de devis en ligne calcule cette marge automatiquement pour vous !",
    category: "prix"
  },
  {
    id: "faq-6",
    question: "Quels sont les délais pour obtenir un devis et démarrer la livraison ?",
    answer: "Nos devis sont traités en moins de 24 à 48 heures ouvrées. Pour les pierres disponibles en stock continu à notre dépôt, la livraison peut s'effectuer sous 2 à 4 jours après validation de votre commande.",
    category: "livraison"
  }
];
