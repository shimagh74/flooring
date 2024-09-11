import Hybrid1Img from './assets/img/1004.jpg';
import Hybrid1ImgLg from './assets/img/1004.png';
import Hybrid2Img from './assets/img/1007.jpg';
import Hybrid2ImgLg from './assets/img/1007.png';
import Hybrid3Img from './assets/img/1009.jpg';
import Hybrid3ImgLg from './assets/img/1009.png';
import Hybrid4Img from './assets/img/1012.jpg';
import Hybrid4ImgLg from './assets/img/1012.png';
import Hybrid5Img from './assets/img/1028.jpg';
import Hybrid5ImgLg from './assets/img/1028.png';
import Hybrid6Img from './assets/img/1033.jpg';
import Hybrid6ImgLg from './assets/img/1033.png';
import Hybrid7Img from './assets/img/1077.jpg';
import Hybrid7ImgLg from './assets/img/1077.png';
import Hybrid8Img from './assets/img/3005.jpg';
import Hybrid8ImgLg from './assets/img/3005.png';
import Hybrid9Img from './assets/img/3033.jpg';
import Hybrid9ImgLg from './assets/img/3033.png';
import Hybrid10Img from './assets/img/HW8101.jpg';
import Hybrid10ImgLg from './assets/img/HW8101.png';
import Hybrid11Img from './assets/img/HW8022.jpg';
import Hybrid11ImgLg from './assets/img/HW8022-1.jpg';
import Hybrid11ImgLg2 from './assets/img/HW8022-2.png';
import Hybrid12Img from './assets/img/HW8106.jpg';
import Hybrid12ImgLg from './assets/img/HW8106.png';

import {
  FaWifi,
  FaCoffee,
  FaBath,
  FaParking,
  FaSwimmingPool,
  FaHotdog,
  FaStopwatch,
  FaCocktail,
} from 'react-icons/fa';

export const descriptionDetails = [
  { name: 'Size', value: '1524*228*8mm (0.5mm Coating + 6.0mm Body Formula + 1.5mm Underlay)' },
  { name: 'Surface', value: 'BP Surface UV coating' },
  { name: 'Underlay', value: '1.5mm IXPE - Non-smelling anti-bacteria' },
  { name: 'Profile', value: 'Unilin click, Four sides painted bevel, EIR embossing' },
  { name: 'Units per Box', value: '5 planks' },
  { name: 'SQM', value: '1.734 sqm/Box' },
  { name: 'Material', value: 'Made of 100% virgin materials' },
  { name: 'Warranty', value: 'Lifetime Structural Warranty (Residential 30 Years, Light Commercial 10 Years)' },
  { name: 'Description', value: 'Amir Series Hybrid SPC Waterproof Flooring, crafted for the modern Australian home with advanced waterproof technology using German engineering...' }
];

export const TechnicalData = [
  { name: 'Fire Classification', value: 'EN ISO 9239-1 Bfl－s1' },
  { name: 'Resistance to Impact', value: 'ASTM F-1265, No crack' },
  { name: 'Staining Resistance', value: 'EN 438-2:2016, Groups 1,2: Grade 5, No change; Groups 3: Grade 3, Moderate change' },
  { name: 'Scratch Resistance', value: 'ISO 1518-1:2011(E), 2700g' },
  { name: 'Residual Indentation', value: 'EN 433, ≤0.05mm' },
  { name: 'Castor Chair Suitability', value: 'EN 425, PASS, No visible damage after 25000 revolutions' },
  { name: 'Light Fastness', value: 'ISO 105B02:2014, Blue Wool >Grade 6' },
  { name: 'Burning Cigarette', value: 'ASTM E662, PASS' },
  { name: 'Dimensional Stability', value: 'EN 434, ASTM F 2199, ≤0.1%, ≤0.013 in/ft' },
  { name: 'Chemical Resistance', value: 'ASTM F925, PASS, No more than slight surface dulling, attack, or staining' },
  { name: 'VOC Emissions', value: 'FloorScore, certified' },
  { name: 'Slip Resistance', value: 'DIN 51330:2014-02, R10' },
  { name: 'Resistant to Heat', value: 'ASTM F1514, E=0.19' },
  { name: 'Underfloor Heating', value: '≤27℃' }
];
export const descriptionHybrid =[{
  description :'Amir Series Hybrid SPC Waterproof Flooring, thoughtfully crafted for the modern Australian home. This innovative flooring solution features advanced waterproof technology, utilizing cutting-edge German engineering to ensure durability and reliability for families. The Amir Series showcases a stunning array of rich, luminous colors reminiscent of the breathtaking hues found in nature, creating a vibrant and inviting atmosphere in every room. Whether you’re designing a cozy living space, a stylish kitchen, or a serene bedroom, the Amir Series adds a touch of elegance and functionality. Experience the perfect blend of aesthetic appeal and practical performance, making your home not only beautiful but also resilient against the demands of everyday life. Transform your interiors with the Aurora Series and embrace a unique style that reflects both warmth and sophistication.'
}]

export const productData = [
  {
    id: 1,
    name: 'Jarrah Stone',
    code: '1004' ,
    description:'',
    facilities: [
      { name: 'Wifi', icon: <FaWifi /> },
      { name: 'Coffee', icon: <FaCoffee /> },
      { name: 'Bath', icon: <FaBath /> },
      { name: 'Parking Space', icon: <FaParking /> },
      { name: 'Swimming Pool', icon: <FaSwimmingPool /> },
      { name: 'Breakfast', icon: <FaHotdog /> },
      { name: 'GYM', icon: <FaStopwatch /> },
      { name: 'Drinks', icon: <FaCocktail /> },
    ],
    size: 30,
    maxPerson: 1,
    price: 115,
    image: Hybrid1Img,
    imageLg: Hybrid1ImgLg,
  },
  {
    id: 2,
    name: 'Ironbark Grey',
    code: '1007' ,
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit.Ea placeat eos sed voluptas unde veniam eligendi a. Quaerat molestiae hic omnis temporibus quos consequuntur nam voluptatum ea accusamus, corrupti nostrum eum placeat quibusdam quis beatae quae labore earum architecto aliquid debitis.',
    facilities: [
      { name: 'Wifi', icon: <FaWifi /> },
      { name: 'Coffee', icon: <FaCoffee /> },
      { name: 'Bath', icon: <FaBath /> },
      { name: 'Parking Space', icon: <FaParking /> },
      { name: 'Swimming Pool', icon: <FaSwimmingPool /> },
      { name: 'Breakfast', icon: <FaHotdog /> },
      { name: 'GYM', icon: <FaStopwatch /> },
      { name: 'Drinks', icon: <FaCocktail /> },
    ],
    size: 70,
    maxPerson: 2,
    price: 220,
    image: Hybrid2Img,
    imageLg: Hybrid2ImgLg,
  },
  {
    id: 3,
    name: 'Charcoal Oak',
    code: '1009' ,
    description:'',
    facilities: [
      { name: 'Wifi', icon: <FaWifi /> },
      { name: 'Coffee', icon: <FaCoffee /> },
      { name: 'Bath', icon: <FaBath /> },
      { name: 'Parking Space', icon: <FaParking /> },
      { name: 'Swimming Pool', icon: <FaSwimmingPool /> },
      { name: 'Breakfast', icon: <FaHotdog /> },
      { name: 'GYM', icon: <FaStopwatch /> },
      { name: 'Drinks', icon: <FaCocktail /> },
    ],
    size: 50,
    maxPerson: 3,
    price: 265,
    image: Hybrid3Img,
    imageLg: Hybrid3ImgLg,
  },
  {
    id: 4,
    name: 'Frosted Oak',
    code: '1012' ,
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit.Ea placeat eos sed voluptas unde veniam eligendi a. Quaerat molestiae hic omnis temporibus quos consequuntur nam voluptatum ea accusamus, corrupti nostrum eum placeat quibusdam quis beatae quae labore earum architecto aliquid debitis.',
    facilities: [
      { name: 'Wifi', icon: <FaWifi /> },
      { name: 'Coffee', icon: <FaCoffee /> },
      { name: 'Bath', icon: <FaBath /> },
      { name: 'Parking Space', icon: <FaParking /> },
      { name: 'Swimming Pool', icon: <FaSwimmingPool /> },
      { name: 'Breakfast', icon: <FaHotdog /> },
      { name: 'GYM', icon: <FaStopwatch /> },
      { name: 'Drinks', icon: <FaCocktail /> },
    ],
    size: 50,
    maxPerson: 4,
    price: 289,
    image: Hybrid4Img,
    imageLg: Hybrid4ImgLg,
  },
  {
    id: 5,
    name: 'Ashwood Drift',
    code: '1028' ,
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit.Ea placeat eos sed voluptas unde veniam eligendi a. Quaerat molestiae hic omnis temporibus quos consequuntur nam voluptatum ea accusamus, corrupti nostrum eum placeat quibusdam quis beatae quae labore earum architecto aliquid debitis.',
    facilities: [
      { name: 'Wifi', icon: <FaWifi /> },
      { name: 'Coffee', icon: <FaCoffee /> },
      { name: 'Bath', icon: <FaBath /> },
      { name: 'Parking Space', icon: <FaParking /> },
      { name: 'Swimming Pool', icon: <FaSwimmingPool /> },
      { name: 'Breakfast', icon: <FaHotdog /> },
      { name: 'GYM', icon: <FaStopwatch /> },
      { name: 'Drinks', icon: <FaCocktail /> },
    ],
    size: 90,
    maxPerson: 5,
    price: 320,
    image: Hybrid5Img,
    imageLg: Hybrid5ImgLg,
  },
  {
    id: 6,
    name: 'Smoky Ash',
    code: '1033' ,
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit.Ea placeat eos sed voluptas unde veniam eligendi a. Quaerat molestiae hic omnis temporibus quos consequuntur nam voluptatum ea accusamus, corrupti nostrum eum placeat quibusdam quis beatae quae labore earum architecto aliquid debitis.',
    facilities: [
      { name: 'Wifi', icon: <FaWifi /> },
      { name: 'Coffee', icon: <FaCoffee /> },
      { name: 'Bath', icon: <FaBath /> },
      { name: 'Parking Space', icon: <FaParking /> },
      { name: 'Swimming Pool', icon: <FaSwimmingPool /> },
      { name: 'Breakfast', icon: <FaHotdog /> },
      { name: 'GYM', icon: <FaStopwatch /> },
      { name: 'Drinks', icon: <FaCocktail /> },
    ],
    size: 45,
    maxPerson: 6,
    price: 344,
    image: Hybrid6Img,
    imageLg: Hybrid6ImgLg,
  },
  {
    id: 7,
    name: 'Sandy Oak',
    code: '1077' ,
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit.Ea placeat eos sed voluptas unde veniam eligendi a. Quaerat molestiae hic omnis temporibus quos consequuntur nam voluptatum ea ccusamus, corrupti nostrum eum placeat quibusdam quis beatae quae labore earum architecto aliquid debitis.',
    facilities: [
      { name: 'Wifi', icon: <FaWifi /> },
      { name: 'Coffee', icon: <FaCoffee /> },
      { name: 'Bath', icon: <FaBath /> },
      { name: 'Parking Space', icon: <FaParking /> },
      { name: 'Swimming Pool', icon: <FaSwimmingPool /> },
      { name: 'Breakfast', icon: <FaHotdog /> },
      { name: 'GYM', icon: <FaStopwatch /> },
      { name: 'Drinks', icon: <FaCocktail /> },
    ],
    size: 84,
    maxPerson: 7,
    price: 389,
    image: Hybrid7Img,
    imageLg: Hybrid7ImgLg,
  },
  {
    id: 8,
    name: 'Sunlit Pine',
    code: '3005' ,
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit.Ea placeat eos sed voluptas unde veniam eligendi a. Quaerat molestiae hic omnis temporibus quos consequuntur nam voluptatum ea accusamus, corrupti nostrum eum placeat quibusdam quis beatae quae labore earum architecto aliquid debitis.',
    facilities: [
      { name: 'Wifi', icon: <FaWifi /> },
      { name: 'Coffee', icon: <FaCoffee /> },
      { name: 'Bath', icon: <FaBath /> },
      { name: 'Parking Space', icon: <FaParking /> },
      { name: 'Swimming Pool', icon: <FaSwimmingPool /> },
      { name: 'Breakfast', icon: <FaHotdog /> },
      { name: 'GYM', icon: <FaStopwatch /> },
      { name: 'Drinks', icon: <FaCocktail /> },
    ],
    size: 48,
    maxPerson: 8,
    price: 499,
    image: Hybrid8Img,
    imageLg: Hybrid8ImgLg,
  },
  {
    id: 9,
    name: 'Rustic Breeze Oak',
    code: 'HW8101' ,
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit.Ea placeat eos sed voluptas unde veniam eligendi a. Quaerat molestiae hic omnis temporibus quos consequuntur nam voluptatum ea accusamus, corrupti nostrum eum placeat quibusdam quis beatae quae labore earum architecto aliquid debitis.',
    facilities: [
      { name: 'Wifi', icon: <FaWifi /> },
      { name: 'Coffee', icon: <FaCoffee /> },
      { name: 'Bath', icon: <FaBath /> },
      { name: 'Parking Space', icon: <FaParking /> },
      { name: 'Swimming Pool', icon: <FaSwimmingPool /> },
      { name: 'Breakfast', icon: <FaHotdog /> },
      { name: 'GYM', icon: <FaStopwatch /> },
      { name: 'Drinks', icon: <FaCocktail /> },
    ],
    size: 48,
    maxPerson: 8,
    price: 499,
    image: Hybrid9Img,
    imageLg: Hybrid9ImgLg,
  },
  {
    id: 10,
    name: 'Sunlit Pine',
    code: '3005' ,
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit.Ea placeat eos sed voluptas unde veniam eligendi a. Quaerat molestiae hic omnis temporibus quos consequuntur nam voluptatum ea accusamus, corrupti nostrum eum placeat quibusdam quis beatae quae labore earum architecto aliquid debitis.',
    facilities: [
      { name: 'Wifi', icon: <FaWifi /> },
      { name: 'Coffee', icon: <FaCoffee /> },
      { name: 'Bath', icon: <FaBath /> },
      { name: 'Parking Space', icon: <FaParking /> },
      { name: 'Swimming Pool', icon: <FaSwimmingPool /> },
      { name: 'Breakfast', icon: <FaHotdog /> },
      { name: 'GYM', icon: <FaStopwatch /> },
      { name: 'Drinks', icon: <FaCocktail /> },
    ],
    size: 48,
    maxPerson: 8,
    price: 499,
    image: Hybrid10Img,
    imageLg: Hybrid10ImgLg,
  },
  {
    id: 11,
    name: 'Golden Oak Breeze',
    code: 'HW8022' ,
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit.Ea placeat eos sed voluptas unde veniam eligendi a. Quaerat molestiae hic omnis temporibus quos consequuntur nam voluptatum ea accusamus, corrupti nostrum eum placeat quibusdam quis beatae quae labore earum architecto aliquid debitis.',
    facilities: [
      { name: 'Wifi', icon: <FaWifi /> },
      { name: 'Coffee', icon: <FaCoffee /> },
      { name: 'Bath', icon: <FaBath /> },
      { name: 'Parking Space', icon: <FaParking /> },
      { name: 'Swimming Pool', icon: <FaSwimmingPool /> },
      { name: 'Breakfast', icon: <FaHotdog /> },
      { name: 'GYM', icon: <FaStopwatch /> },
      { name: 'Drinks', icon: <FaCocktail /> },
    ],
    size: 48,
    maxPerson: 8,
    price: 499,
    image: Hybrid11Img,
    imageLg: Hybrid11ImgLg,
    imageLg2: Hybrid11ImgLg2,
  },
  {
    id: 12,
    name: 'Classic Oak',
    code: 'HW8106' ,
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit.Ea placeat eos sed voluptas unde veniam eligendi a. Quaerat molestiae hic omnis temporibus quos consequuntur nam voluptatum ea accusamus, corrupti nostrum eum placeat quibusdam quis beatae quae labore earum architecto aliquid debitis.',
    facilities: [
      { name: 'Wifi', icon: <FaWifi /> },
      { name: 'Coffee', icon: <FaCoffee /> },
      { name: 'Bath', icon: <FaBath /> },
      { name: 'Parking Space', icon: <FaParking /> },
      { name: 'Swimming Pool', icon: <FaSwimmingPool /> },
      { name: 'Breakfast', icon: <FaHotdog /> },
      { name: 'GYM', icon: <FaStopwatch /> },
      { name: 'Drinks', icon: <FaCocktail /> },
    ],
    size: 48,
    maxPerson: 8,
    price: 499,
    image: Hybrid12Img,
    imageLg: Hybrid12ImgLg,
  },
];


export const navMenu = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Products",
    path: "/Products",
  },
  {
    title: "Repair",
    path: "/Repair",
  },
  {
    title: "Supply",
    path: "/Supply",
  },
  {
    title: "Install",
    path: "/Install",
  },
  {
    title: "About",
    path: "/About",
   
  },
  {
    title: "Contact",
    path: "/Contact",
  },
];

