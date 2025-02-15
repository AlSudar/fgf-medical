export interface ProductI {
  imageSrc: string;
  title: string;
  desc: string;
}

export const MOCK_PRODUCTS: ProductI[] = [
  {
    imageSrc: '/pages/about/products/product-1.png',
    title: 'Radimery',
    desc: 'Питьевой коллаген 12 000 мг',
  },
  {
    imageSrc: '/pages/about/products/product-2.png',
    title: 'Radimery',
    desc: 'Питьевой коллаген 13 000 мг',
  },
  {
    imageSrc: '/pages/about/products/product-3.png',
    title: 'Benev',
    desc: 'NOX Renewal Complex',
  },
];
