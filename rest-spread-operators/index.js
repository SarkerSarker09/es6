

// rest operator
sampleFunction = (...args) => {
	console.log(args[0], args[1], args[2]);
};
sampleFunction([1,2,3], 'str', 250.65);



const fruits = ['banana', 'orange', 'mango'];
const drinks = ['coca cola', 'sprite', 'pepsi'];

// spread operator
const foods = ['biriani', 'rice', 'meat', ...fruits, ...drinks];

console.log(foods)
