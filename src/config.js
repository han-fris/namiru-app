import { apiUrls } from '../global.config.js';

const useApi = import.meta.env?.VITE_VERCEL_ENV;

console.log({ useApi });
export const creatorsSourceUrl = useApi ? '/api/creators' : apiUrls.creators;
export const blogpostSourceUrl = useApi ? '/api/blogposts' : apiUrls.blogposts;

const creatorTypes = {
  1: 'Švadlena, krejčí',
  2: 'Krejčovská dílna',
  3: 'Oděvní designér',
};

export const specializations = {
  1: 'Úpravy oděvů',
  2: 'Opravy oděvů',
  3: 'Redesign / upcycling',
  4: 'Zakázková výroba',
  5: 'Oděv od designéra na míru',
};

const regions = {
  1: 'Hlavní město Praha',
  2: 'Středočeský kraj',
  3: 'Jihočeský kraj',
  4: 'Plzeňský kraj',
  5: 'Karlovarský kraj',
  6: 'Ústecký kraj',
  7: 'Liberecký kraj',
  8: 'Královéhradecký kraj',
  9: 'Pardubický kraj',
  10: 'Kraj Vysočina',
  11: 'Jihomoravský kraj',
  12: 'Olomoucký kraj',
  13: 'Zlínský kraj',
  14: 'Moravskoslezský kraj',
};

export const clothingTypes = {
  1: 'Společenské šaty (plesové, večerní, svatební)',
  2: 'Denní a volnočasové oděvy (sukně, halenky, kalhoty, šaty)',
  3: 'Business / Formální oblečení (kostýmy, saka, košile)',
  4: 'Obleky a saka na míru',
  5: 'Spodní prádlo / Plavky',
  6: 'Outdoorové / Sportovní oblečení',
  7: 'Kabáty, bundy',
};

export const targetCustomers = {
  1: 'Dámské',
  2: 'Pánské',
  3: 'Dětské',
  4: 'Unisex',
  5: 'Malé velikosti',
  6: 'Nadměrné velikosti',
  7: 'LGBTQ+',
  8: 'Oděv pro hendikepované',
};

export const materials = {
  1: 'Jemné, splývavé materiály',
  2: 'Středně těžké a pevné materiály',
  3: 'Těžké materiály',
  4: 'Pružné materiály / Úplety',
  5: 'Technické / Funkční materiály',
  6: 'Náročné materiály',
  7: 'Kůže / Koženka',
};

export const styles = {
  1: 'Moderní / Minimalistický',
  2: 'Elegantní / Formální',
  3: 'Ležérní / Casual',
  4: 'Sportovní / Funkční',
  5: 'Přírodní / Bohémský',
  6: 'Autorský / Konceptuální design',
  7: 'Avantgardní / Experimentální',
  8: 'Vintage / Retro',
  9: 'Tradiční / Folklorní',
};

export const filterCategories = [
  {
    name: 'creatorType',
    label: 'Typ tvůrce',
    options: creatorTypes,
  },
  {
    name: 'specialization',
    label: 'Zaměření',
    options: specializations,
  },
  {
    name: 'region',
    label: 'Region',
    options: regions,
  },
  {
    name: 'clothingType',
    label: 'Druh oděvu',
    options: clothingTypes,
  },
  {
    name: 'targetCustomers',
    label: 'Typ zákazníka',
    options: targetCustomers,
  },
  {
    name: 'materials',
    label: 'Materiály',
    options: materials,
  },
  {
    name: 'style',
    label: 'Styl',
    options: styles,
  },
];
