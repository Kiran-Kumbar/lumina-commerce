export interface Product {
  id: string;
  slug: string;
  name: string;
  price: number;
  originalPrice?: number;
  category: string;
  occasion: string[];
  tags: string[];
  description: string;
  longDescription: string;
  images: string[];
  customizable: boolean;
  deliveryDays: string;
  badge?: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  image: string;
  productCount: number;
  description: string;
  featured: boolean;
  tall: boolean;
}

export interface Review {
  name: string;
  location: string;
  rating: number;
  quote: string;
  product: string;
  date: string;
  avatar?: string;
}

export interface FAQ {
  question: string;
  answer: string;
  category: string;
}
