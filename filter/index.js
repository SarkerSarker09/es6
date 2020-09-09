

// es6 filter
var persons = [
  {firstname : "Malcom", lastname: "Reynolds"},
  {firstname : "Kaylee", lastname: "Frye"},
  {firstname : "Jayne", lastname: "Cobb"},
  {firstname : "Frye", lastname: "Cobb"}
];


console.log(persons.filter(p => p.lastname === 'Cobb'))
