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
    image: ['../assets/1_1.jpg','../assets/1_2.jpg','../assets/1_3.jpg','../assets/1_4.jpg'],
    name: 'Fender Stratocaster HSS 3-Color Sunburnt',
    price: 519000,
    description: "Type: electric; Strings: 6; Form: Stratocaster; Left-Handed: no",
    link: 'https://kaspi.kz/shop/p/fender-player-stratocaster-hss-3-color-sunburst-109271354/?c=750000000',
    rating: 7.1
  },
  {
    id: 2,
    image: ['../assets/2_1.jpg','../assets/2_2.jpg','../assets/2_3.jpg'],
    name: 'Fender Player Plus Telecaster Silver Smoke SS',
    price: 682000,
    description: "Type: electric; Strings: 6; Form: Telecaster; Left-Handed: no",
    link: 'https://kaspi.kz/shop/p/fender-player-plus-telecaster-silver-smoke-ss-103253712/?c=750000000',
    rating: 7.1
  },
  {
    id: 3,
    image: ['../assets/3_1.jpg', "../assets/3_2.jpg", "../assets/3_3.jpg"],
    name: 'Cort Action Bass Plus Black',
    price: 135000,
    description: "Type: electric bass; Strings: 4; Form: Precision; Left-Handed: no",
    link: 'https://kaspi.kz/shop/p/cort-action-bass-plus-black-101496921/?c=750000000',
    rating: 7.1
  },
  {
    id: 4,
    image: ['../assets/4_1.jpg', "../assets/4_2.jpg", "../assets/4_3.jpg"],
    name: 'Fender Player Telecaster HH Tidepool',
    price: 516000,
    description: "Type: electric; Strings: 6; Form: Telecaster; Left-Handed: no",
    link: 'https://kaspi.kz/shop/p/fender-player-telecaster-hh-tidepool-14200237/?c=750000000',
    rating: 7.1
  },
  {
    id: 5,
    image: ['../assets/5_1.jpg'],
    name: 'Fender GOLD FOIL JAZZMASTER FENDER 014-0701-344 Natural',
    price: 923000,
    description: "Type: electric; Strings: 6; Form: Jazzmaster; Left-Handed: no",
    link: 'https://kaspi.kz/shop/p/fender-gold-foil-jazzmaster-fender-014-0701-344-natural-115351703/?c=750000000',
    rating: 7.1
  },
  {
    id: 6,
    image: ['../assets/6_1.jpg', "../assets/6_2.jpg", "../assets/6_3.jpg","../assets/6_4.jpg"],
    name: 'Fender Player Jazz Bass Black',
    price: 500000,
    description: "Type: electric; Strings: 4; Form: Jazz Bass; Left-Handed: no",
    link: 'https://kaspi.kz/shop/p/fender-player-jazz-bass-black-109271170/?c=750000000',
    rating: 7.1
  },
  {
    id: 7,
    image: ['../assets/7_1.jpg', "../assets/7_2.jpg"],
    name: 'Yamaha RDP2F5 Rydeen Black Glitter',
    price: 219000,
    description: 'Complex: bass drum, small drum, floor tom, 2 mounted toms; Type: Drum set; Number of drums: 5',
    link: 'https://kaspi.kz/shop/p/yamaha-rdp2f5-rydeen-black-glitter-100332444/?c=750000000',
    rating: 7.1
  },
  {
    id: 8,
    image: ['../assets/8_1.jpg', "../assets/8_2.jpg", "../assets/8_3.jpg"],
    name: 'Yamaha DTX402K Black',
    price: 234000,
    description: 'Complex: Pads; Type: Electric Drum set; Number of drums: 4',
    link: 'https://kaspi.kz/shop/p/yamaha-dtx402k-black-100008118/?c=750000000',
    rating: 7.1
  },
  {
    id: 9,
    image: ['../assets/9_1.jpg', "../assets/9_2.jpg", "../assets/9_3.jpg"],
    name: 'Fender Bassbreaker 45 Combo',
    price: 525421,
    description: 'Use-Case: Electric guitars; Type: Tube; Sound Canals: 1; Nominal Power: 45.0W;',
    link: 'https://kaspi.kz/shop/p/fender-bassbreaker-45-combo-26700000/?c=750000000',
    rating: 7.1
  },
  {
    id: 10,
    image: ['../assets/3_1.jpg', "../assets/3_2.jpg", "../assets/3_3.jpg"],
    name: 'Cort Action Bass Plus Black',
    price: 135000,
    description: '4-strings, electric bass guitar, right-handed',
    link: 'https://kaspi.kz/shop/p/cort-action-bass-plus-black-101496921/?c=750000000',
    rating: 7.1
  }

];
