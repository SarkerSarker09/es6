

// es6 reduce 
const arr = [1,2,3,4,5];
const total = arr.reduce((prev, cur) => {
	return prev + cur;
});

console.log('reduce-total=>', total);




const persons = [
  {id : 101, productId: 12002},
  {id : 102, productId: 12003},
  {id : 103, productId: 12002},
  {id : 101, productId: 12004}
];

// es6 reduce with remove duplicates and find unique items
const uniqueItems = persons.reduce((prev,cur) => {
	const isExist = prev.filter(p => p.productId === cur.productId );
	if (isExist.length === 0) {
		prev.push(cur);
	}
	return prev;
}, []);

console.log('uniqueItems=>', uniqueItems);



