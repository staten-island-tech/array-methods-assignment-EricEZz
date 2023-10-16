const fruit = [

 {
    firstName:"Apple",
    lastName: "Jeo",
    Short: false,
    long: false,
    Smart: null,
    round: true,
    is: ["red","solid"]
},

{
    firstName:"Pear",
    lastName: "Zaoni",
    Short: false,
    long: true,
    Smart: null,
    round: true,
    is:["fat","bright"]
},
{
    firstName:"Banana",
    lastName: "Up",
    Short: false,
    long: true,
    Smart: null,
    round: false,
    is: ["yellow", "Elongated"]
},

{
    firstName:"Orange",
    lastName: "Ush",
    Short: false,
    long: true,
    Smart: null,
    round: true,
    is: ["orange","peeled"]
}
]
const oij = fruit.forEach((fru) => console.log(fru.firstName));
const pok = fruit.forEach((ok) => ok.forEach() )
//const array1 = [Apple.firstName,Pear.firstName,Banana.firstName,Orange.firstName];

const shorts = fruit.filter((food) => food.long === true);
console.log(shorts);
/*const fruitArr = ['Apple','Pear','Banana','Orange'];
fruitArr.forEach((fruit) => {
console.log(fruitArr);
}); */