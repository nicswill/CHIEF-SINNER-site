import { Product } from '../types';

export const products: Product[] = [
  // T-Shirts
  {
    id: 't1',
    name: 'WRATH TEE',
    price: 45,
    category: 'tshirts',
    image: 'https://images.pexels.com/photos/5325588/pexels-photo-5325588.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 't2',
    name: 'PRIDE TEE',
    price: 45,
    category: 'tshirts',
    image: 'https://images.pexels.com/photos/7691061/pexels-photo-7691061.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 't3',
    name: 'GREED TEE',
    price: 50,
    category: 'tshirts',
    image: 'https://images.pexels.com/photos/5325578/pexels-photo-5325578.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  
  // Hats
  {
    id: 'h1',
    name: 'ENVY CAP',
    price: 35,
    category: 'hats',
    image: 'https://images.pexels.com/photos/9558599/pexels-photo-9558599.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 'h2',
    name: 'LUST BEANIE',
    price: 30,
    category: 'hats',
    image: 'https://images.pexels.com/photos/1070058/pexels-photo-1070058.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  
  // Sweatshirts
  {
    id: 'sw1',
    name: 'SLOTH HOODIE',
    price: 75,
    category: 'sweatshirts',
    image: 'https://images.pexels.com/photos/6311475/pexels-photo-6311475.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 'sw2',
    name: 'GLUTTONY CREW',
    price: 65,
    category: 'sweatshirts',
    image: 'https://images.pexels.com/photos/7691217/pexels-photo-7691217.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  
  // Sweatpants
  {
    id: 'sp1',
    name: 'WRATH JOGGERS',
    price: 65,
    category: 'sweatpants',
    image: 'https://images.pexels.com/photos/6311664/pexels-photo-6311664.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 'sp2',
    name: 'SLOTH SWEATS',
    price: 60,
    category: 'sweatpants',
    image: 'https://images.pexels.com/photos/6311606/pexels-photo-6311606.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  
  // Sneakers
  {
    id: 'sn1',
    name: 'PRIDE RUNNERS',
    price: 120,
    category: 'sneakers',
    image: 'https://images.pexels.com/photos/1456706/pexels-photo-1456706.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 'sn2',
    name: 'ENVY HIKERS',
    price: 135,
    category: 'sneakers',
    image: 'https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
];

export const getProductsByCategory = (category: string) => {
  return products.filter(product => product.category === category);
};