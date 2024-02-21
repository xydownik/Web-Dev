export interface Product{
  id: number;
  image: Array<string>;
  name: string;
  price: number;
  description: string;
  link: string;
  rating: number;
}

export const products = [
  {
    id: 1,
    image: ['https://resources.cdn-kaspi.kz/img/m/p/h28/hc6/69879849123870.jpg?format=gallery-large',
      'https://resources.cdn-kaspi.kz/img/m/p/h28/hc6/69879849123870.jpg?format=gallery-large'],
    name: 'Fender Stratocaster HSS 3-Color Sunburnt',
    price: 519000,
    description: '6-strings, electric guitar, right-handed',
    link: 'https://kaspi.kz/shop/p/fender-player-stratocaster-hss-3-color-sunburst-109271354/?c=750000000',
    rating: 7.1
  },
  {
    id: 2,
    image: ['https://resources.cdn-kaspi.kz/img/m/p/hd1/h0d/64367767126046.jpg?format=gallery-large','https://resources.cdn-kaspi.kz/img/m/p/hd1/h0d/64367767126046.jpg?format=gallery-large','https://resources.cdn-kaspi.kz/img/m/p/hd1/h0d/64367767126046.jpg?format=gallery-large','https://resources.cdn-kaspi.kz/img/m/p/h28/hc6/69879849123870.jpg?format=gallery-large'],
    name: 'Fender Player Plus Telecaster Silver Smoke SS',
    price: 682000,
    description: '6-strings, electric guitar, right-handed',
    link: 'https://kaspi.kz/shop/p/fender-player-plus-telecaster-silver-smoke-ss-103253712/?c=750000000',
    rating: 7.1
  },
  {
    id: 3,
    image: ['https://resources.cdn-kaspi.kz/img/m/p/he7/ha0/64081641865246.jpg?format=gallery-large'],
    name: 'Cort Action Bass Plus Black',
    price: 135000,
    description: '4-strings, electric bass guitar, right-handed',
    link: 'https://kaspi.kz/shop/p/cort-action-bass-plus-black-101496921/?c=750000000',
    rating: 7.1
  }

];
