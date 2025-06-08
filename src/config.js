// https://docs.google.com/spreadsheets/d/1Ev1swB-zamqmO4Htush-wRefSX8TuUjC6uNgdM-Llp0/edit?usp=sharing
export const creatorsSourceUrl =
  'https://script.google.com/macros/s/AKfycbyd-W_HSWBAf0cJAUOyWPe9EJ_f18FQ0WIx8k3It8jsbUvReVzU5WN1DlT5AC6eimjN/exec';

export const blogpostSourceUrl =
  'https://script.google.com/macros/s/AKfycbzJzpW-l-ZVTME7wGhwqfd0QsPe3BLn5jBNlQ3RLtHxABBO51CIUV93IT8nHNfxXgg/exec';

const creatorTypeKeywords = {
  1: 'švadlena',
  2: 'dílna',
  3: 'designér',
};

const specializationKeywords = {
  1: 'úpravy',
  2: 'opravy',
  3: 'upcycling',
  4: 'zakázková výroba',
  5: 'návrhářská činnost',
};

const regionKeywords = {
  1: 'praha',
  2: 'středočeský',
  3: 'jihočeský',
  4: 'plzeňský',
  5: 'karlovarský',
  6: 'ústecký',
  7: 'liberecký',
  8: 'královéhradecký',
  9: 'pardubický',
  10: 'vysočina',
  11: 'jihomoravský',
  12: 'olomoucký',
  13: 'zlínský',
  14: 'moravskoslezský',
};

const clothingTypesKeywords = {
  1: 'společenské',
  2: 'volnočasové',
  3: 'business',
  4: 'obleky',
  5: 'spodní prádlo',
  6: 'outdoorové',
  7: 'kabáty',
};

const targetCustomersKeywords = {
  1: 'dámské',
  2: 'pánské',
  3: 'dětské',
  4: 'unisex',
  5: 'malé',
  6: 'velké',
  7: 'queer',
  8: 'osoby s hendikepem',
};

const materialsKeywords = {
  1: 'jemné',
  2: 'středně',
  3: 'kabáty',
  4: 'pružné',
  5: 'technické',
  6: 'náročné',
  7: 'kůže',
};

const styleKeywords = {
  1: 'moderní',
  2: 'elegantní',
  3: 'casual',
  4: 'sportovní',
  5: 'bohémský',
  6: 'konceptuální',
  7: 'avantgardní',
  8: 'vintage',
  9: 'folklorní',
};

export const filterCategories = [
  {
    name: 'creatorType',
    label: 'Typ tvůrce',
    options: creatorTypeKeywords,
  },
  {
    name: 'specialization',
    label: 'Zaměření',
    options: specializationKeywords,
  },
  {
    name: 'region',
    label: 'Region',
    options: regionKeywords,
  },
  {
    name: 'clothingType',
    label: 'Druh oděvu',
    options: clothingTypesKeywords,
  },
  {
    name: 'targetCustomers',
    label: 'Typ zákazníka',
    options: targetCustomersKeywords,
  },
  {
    name: 'materials',
    label: 'Materiály',
    options: materialsKeywords,
  },
  {
    name: 'style',
    label: 'Styl',
    options: styleKeywords,
  },
];
