
//==== es6  function with argument ===============
function isActive(age)  {
	const ages = [23,45,65];
	return ages.indexOf(age) > -1;
};

const age = 45;
console.log('Result:', isActive(age));


