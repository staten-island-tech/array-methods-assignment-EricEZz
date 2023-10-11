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

//const array1 = [Apple.firstName,Pear.firstName,Banana.firstName,Orange.firstName];
array1.forEach((fruit) => console.log(fruit.firstName))

/*const fruitArr = ['Apple','Pear','Banana','Orange'];
fruitArr.forEach((fruit) => {
console.log(fruitArr);
}); */