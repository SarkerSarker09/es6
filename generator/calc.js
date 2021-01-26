function* generator(x, y) {
	let  v = yield  x + y;
	let  z = yield x + y + v;
	yield x + y + v + z;
}

var gen = generator(10, 20);
console.log(gen.next());
console.log(gen.next(10));
console.log(gen.next(10));

