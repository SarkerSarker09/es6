
//====== way 01 === through rest operator
const result1 = [...str];
console.log(`result1: ${result1}`);

//====== way 02 ===== through
const result2 = Object.assign([], str);
console.log(`result2:  ${result2}`);

//====== way 03====== through Array 
const result3 = Array.from(str);
console.log(`result03: ${result3}`)

const callMe = {
  genStrToArray: (...obj) => {
    let t = [];
    obj.forEach((item, index) => {
      console.log("data=> ", index);
      t.push(...item);
    });
    return t;
  }
};

const result4 = callMe.genStrToArray('Search', 'Engine', 'Google');
console.log(`result04: ${result4}`);
//======== log4: S,e,a,r,c,h,E,n,g,i,n,e,G,o,o,g,l,e 


