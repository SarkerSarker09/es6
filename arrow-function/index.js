

// es6 arrow function 
const sampleFunction = () => {
	return 'This is test function';
}

// es6 arrow function with short form
const sampleFunctionShortForm = () => 'This is test function short form';



// es6 arrow function with argument
const isActive = (status) => status ? 'ACTIVE' : 'INACTIVE';


console.log(sampleFunction());
console.log(sampleFunctionShortForm());

console.log(isActive(true));