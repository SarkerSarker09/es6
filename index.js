
//====== way 01 === through rest operator
const result1 = [...str];
console.log(`result1: ${result1}`);

//====== way 02 ===== through
const result2 = Object.assign([], str);
console.log(`result2:  ${result2}`);

//====== way 03====== through Array 
const result3 = Array.from(str);
console.log(`result03: ${result3}`)
