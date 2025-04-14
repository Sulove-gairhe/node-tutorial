//Spread operator-It basically allows us to make a copy of a reference type and work with it without changing the orignal object/array/function.


const todo = ["buy milk","call mom"];

//suppose you wanna back it up here before adding any other list so you don't forget em 

// const backupTodo = todo;
// backupTodo.push("Read");
// console.log(todo);
// op="buy milk","call mom" "Read"-this changes the orignal array(todo) too which we don't want thus we need spread operator

const backupTodo=[...todo];
backupTodo.push("Read");
console.log(todo);  //op="buy milk","call mom"
console.log(backupTodo); //op="buy milk","call mom" "Read"

//this allows us to work with our orignal aray("buy milk","call mom") but keeping it intact and not changed.

//Rest operator- when we don't know the number of amount of input

function sumALL(...numbers){
    let total=0;
    for(let num of numbers){
        total=total+num;
    }
    return total;
}
console.log(sumALL(5,5,5,5,5,5,5));
console.log(sumALL(5,6,6));

console.log(sumALL(5,6,6));
console.log(sumALL(5,6,6,7,8));
//this allows us to take N number of inputs in sumALL as it has rest operator ...numbers. The ...numbers collects all the argument and puts them into an array like for sumALL(5,6,6) numbers[5,6,6]; and we can loop through using num.