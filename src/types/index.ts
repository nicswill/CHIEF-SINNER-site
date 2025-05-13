export interface Product {
  id: string;
  name: string;
  price: number;
  category: 'tshirts' | 'hats' | 'sweatshirts' | 'sweatpants' | 'sneakers';
  image: string;
}

export interface Category {
  id: string;
  name: string;
  image: string;
  slug: 'tshirts' | 'hats' | 'sweatshirts' | 'sweatpants' | 'sneakers';
}