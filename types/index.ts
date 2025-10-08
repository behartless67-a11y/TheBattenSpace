export interface ServiceTile {
  id: string;
  title: string;
  description?: string;
  icon?: string;
  image?: string;
  href: string;
  type: 'featured' | 'quick-link';
  requiredGroup?: string;
  category?: string;
}

export interface Department {
  id: string;
  name: string;
  description?: string;
}
