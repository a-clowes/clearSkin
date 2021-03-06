const pool = require('./config.js');

let ingredients = [
  'Acetylated Lanolin',
  'Acetylated Lanolin Alcohol',
  'Algae Extract',
  'Algin',
  'Butyl Stearate',
  'Carrageenan',
  'Cetyl Acetate',
  'Cetearyl Alcohol + Ceteareth 20',
  'Chondrus Crispus',
  'Irish Moss',
  'Carageenan Moss',
  'Chlorella',
  'Coal Tar',
  'Cocoa Butter',
  'Coconut Alkanes',
  'Coconut Butter',
  'Coconut Oil',
  'Colloidal Sulfur',
  'Cotton Awws Oil',
  'Cotton Seed Oil',
  'D & C Red # 17',
  'D & C Red # 21',
  'D & C Red # 3',
  'D & C Red # 30',
  'D & C Red # 36',
  'Decyl Oleate',
  'Dioctyl Succinate',
  'Disodium Monooleamido PEG 2- Sulfosuccinate',
  'Ethoxylated Lanolin',
  'Ethylhexyl Palmitate',
  'Glyceryl Stearate SE',
  'Glyceryl-3 Diisostearate',
  'Hexadecyl Alcohol',
  'Hydrogenated Vegetable Oil',
  'Isocetyl Alcohol',
  'Isocetyl Stearate',
  'Isodecyl Oleate',
  'Isopropyl Isostearate',
  'Isopropyl Linolate',
  'Isopropyl Myristate',
  'Isopropyl Palmitate',
  'Isostearyl Isostearate',
  'Isostearyl Neopentanoate',
  'Kelp',
  'Laminaria Digitata Extract',
  'Laminaria Saccharina Extract',
  'Laminaria Saccharine',
  'Lanolin',
  'Laureth-23',
  'Laureth-4',
  'Lauric Acid',
  'Mink Oil',
  'Myristic Acid',
  'Myristyl Lactate',
  'Myristyl Myristate',
  'Octyl Palmitate',
  'Octyl Stearate',
  'Oleth-3',
  'Oleyl Alcohol',
  'Olive oil',
  'PEG 16 Lanolin',
  'PEG 200 Dilaurate',
  'PEG 8 Stearate',
  'PG Monostearate',
  'PPG 2 Myristyl Propionate',
  'Plankton',
  'Polyglyceryl-3 Diisostearate',
  'Potassium Chloride',
  'Propylene Glycol Monostearate',
  'Red Algae',
  'Seaweed',
  'Shark Liver Oil (Squalene)',
  'Shea Butter',
  'Sodium Laureth Sulfate',
  'Sodium Lauryl Sulfate',
  'Solulan 16',
  'Sorbitan Oleate',
  'Soybean Oil',
  'Spirulina',
  'Steareth 10',
  'Stearic Acid Tea',
  'Stearyl Heptanoate',
  'Sulfated Castor Oil',
  'Sulfated Jojoba Oil',
  'Wheat Germ Glyceride',
  'Wheat Germ Oil',
  'Xylene'
];

let seed = (list) => {

  list.forEach(ingredient => {
    const queryString = `INSERT INTO ingredients (name, approved)
    VALUES ($1, false);`

    ingredient = ingredient.toLowerCase();
    pool.query(queryString, [ingredient], (err) => {
      if (err) {
        console.log('error seeding ingredient data', err);
      } else {
        console.log('success');
      }
    });
  })
}

seed(ingredients);