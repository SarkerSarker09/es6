


const p = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve({
			total_installment: 12			
		});
		// reject('rejected')
	}, 1000);
});

p.then(data => console.log(data));



const f = () => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve({
				total_installment: 5600
			});
			// resolve('promise-rejected')
		}, 1000);
	});
}

f().then(data => console.log(data));




Promise.all([p, f()]).then(data => console.log(data));




