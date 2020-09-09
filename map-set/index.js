
// es6 map 
const persons = [
  ['cucumber', 500],
  ['tomatoes', 350],
  ['onion',    50],
  ['onion',    59]
];
const mp = new Map(persons);
console.log('map-unique-items=>', mp);

// es6 map set
const ms = new Map();
ms.set('cucumber', 256);
ms.set('tomatoes', 356);
ms.set('onion', 450);
ms.set('onion', 454);
console.log('map-unique-items=>', ms);


