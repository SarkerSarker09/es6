
// async-await
const axios = require('axios');

fetchDataFromApi = async () => {
	const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
	return res.data;
};

getDataFromApi = async() => {
	const f = await fetchDataFromApi();
	console.log('f', f)
	return f;
};


fetchDataFromPromise = async() => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve({
				id: 1001,
				name: 'Hello World',
				body: 'BLal BLal'
			});
		}, 1000);	
	})	
};


getDataFromPromise = async() => {
	const d = await fetchDataFromPromise();	
	console.log('d', d)
	return d;
};

getDataFromApi();
getDataFromPromise();

console.log('===========================')

Promise.all([
	fetchDataFromApi(), 
	fetchDataFromPromise()
]).then(data => console.log(data));

	

