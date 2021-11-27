

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





let obj = {
  details: [
    {
      grand_total_price: 3040.0,
      order_status: "Pending",
      shipping_name: "Samer",
      shipping_phone: "01793497940",
      shipping_address: "Kusholi bhaban, Taltola, Agargaon, Dhaka",
      billing_name: null,
      billing_phone: null,
      billing_address: null,
      shipping_cost_id: 53,
      payment_method_id: 1,
      payment_method_name: "COD",
      estimated_delivery_time: "Delivery within 1 to 5 days",
      bn_name: "Dhaka",
      shipping_price: 50.0
    }
  ],
  order_list: [
    {
      id: 50016,
      book_bng_name: "ইনকাম @ ফেইসবুক",
      price: 200.0,
      qty: 5,
      total_price: 1000.0,
      order_status: "Canceled"
    },
    {
      id: 36478,
      book_bng_name: "আমার সিলেট",
      price: 300.0,
      qty: 2,
      total_price: 600.0,
      order_status: "Pending"
    },
    {
      id: 36465,
      book_bng_name: "ভুল স্বর্গ",
      price: "220.00",
      qty: 2,
      total_price: "440.00",
      order_status: "Canceled"
    },
    {
      id: 48935,
      book_bng_name: "হলুদ বরনী",
      price: 100.0,
      qty: 4,
      total_price: 400.0,
      order_status: "Pending"
    },
    {
      id: 50997,
      book_bng_name: "শীতে উপেক্ষিতা",
      price: 150.0,
      qty: 1,
      total_price: 150.0,
      order_status: "Canceled"
    },
    {
      id: 36475,
      book_bng_name: "আটলান্টিকের পড়ন্ত বিকেলে",
      price: 200.0,
      qty: 2,
      total_price: 400.0,
      order_status: "Pending"
    }
  ]
};

let res = obj.order_list
  .filter((o) => o.order_status !== "Canceled")
  .reduce((acc, curr) => {
    return acc = acc + curr.price * curr.qty;
  }, 0);

console.log(`total: ${res}`);








