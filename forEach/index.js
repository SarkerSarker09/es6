

// es6 foreach

const fruits = 
[
	{id: 11, name: "apple"}, 
	{id: 12, name: "orange"}, 
	{id: 13, name: "cherry"}
];


 
fruits.forEach((item, key) => {
	console.log('item object,key=>', item, key);
})