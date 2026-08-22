export type ClientType = 'particulier' | 'entreprise';

export type StoneCategory = 
  | 'barrettes' 
  | 'dallage' 
  | 'briquettes' 
  | 'opus' 
  | 'blocs_massifs';

export type StoneColor = 
  | 'dore_miel' 
  | 'gris_graphite' 
  | 'ocre_rose' 
  | 'blanc_cristal' 
  | 'panache_naturel';

export type ProjectUsage = 
  | 'facade_exterieure' 
  | 'interieur_salon' 
  | 'piliers_clotures' 
  | 'terrasse_piscine' 
  | 'cheminee_decoration';

export interface StoneProduct {
  id: string;
  name: string;
  subtitle: string;
  category: StoneCategory;
  categoryLabel: string;
  primaryColor: StoneColor;
  colorLabel: string;
  colorHex: string;
  texturePattern: string;
  description: string;
  longDescription: string;
  features: string[];
  dimensions: string;
  thickness: string;
  weight: string;
  origin: string;
  recommendedUsages: ProjectUsage[];
  usageLabels: string[];
  finishes: string[];
  priceRange: string; // e.g. '18 500 - 24 000 FCFA / m²'
  imageUrl: string;
  textureZoomUrl: string;
  realPhotoContext: string;
  inStock: boolean;
  popular?: boolean;
}

export interface ProjectShowcase {
  id: string;
  title: string;
  clientType: ClientType;
  category: string;
  location: string;
  surface: string;
  stoneUsed: string;
  stoneId: string;
  description: string;
  imageUrl: string;
  galleryImages: string[];
  year: string;
  highlights: string[];
}

export interface QuoteFormState {
  clientType: ClientType;
  fullName: string;
  phone: string;
  email: string;
  companyName?: string;
  city: string;
  projectType: ProjectUsage;
  stoneSelected: string;
  surfaceM2: number;
  needInstallation: boolean;
  timeframe: 'urgent' | '1_month' | '3_months' | 'study';
  message: string;
}

export interface Testimonial {
  id: string;
  author: string;
  role: string;
  companyOrLocation: string;
  clientType: ClientType;
  rating: number;
  content: string;
  project: string;
  avatarUrl: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'produit' | 'pose' | 'livraison' | 'prix';
}
