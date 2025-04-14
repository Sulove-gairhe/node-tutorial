//destructre:
const movie = { title: "Inception", director: "Nolan", year: 2010 };
// Your code here
const {title,director,year} = movie;
console.log(title);
console.log(director);
console.log(year);

//grab first and third fruits
const fruits = ["apple", "banana", "cherry", "pie"];
// Your code here
const [frt1, , frt3,frt4]= fruits;
console.log(frt1,frt3,frt4);


//destrucutre the real shit-most usecase format 

const personINFO=({name,address})=>{
    console.log("The name of the user is "+ name + " and his address is "+address);
}

const person={name:"Sulove",age:12,address:"Pokhara"};
personINFO(person);

