

// es6 arrow function inside object
const obj = {
	id: 10022,
	firstName: 'Samer',
	lastName: 'Sarker',
	mobile: '01719347580',
	fullName: () => {
		return obj.firstName + ' ' + obj.lastName;
	}
};
console.log('object=>', obj);
console.log('object-specific-index=>', obj.firstName);
console.log('object-function=>', obj.fullName());


// object value replace or add
obj['mobile'] = '01719347588'
obj['test'] = 'test value'
console.log('object-after-add-item=>', obj);

// remove item from object
delete obj['test'];

// we can use this way also
delete obj.test;
console.log('object-after-remove-item=>', obj);





// es6 object array
const objArray = [
	{
		id: 102,
		name: 'ABC0001'
	},

	{
		id: 103,
		name: 'ABC0003'
	},

	{
		id: 104,
		name: 'ABC0002'
	},
];
console.log('objArray=>', objArray);


// es6 object array add new item 
objArray.push({
	id: 105,
	name: 'ABC0005'
});
console.log('objArray-after-add-new-item=>', objArray);
