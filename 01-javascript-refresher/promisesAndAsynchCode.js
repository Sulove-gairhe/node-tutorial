// /✨ Task:
// Write a function called sayHiLater that:

// Returns a Promise

// The promise resolves after 1 second

// It resolves with the message: "Hi there!"

// Then, call it and use .then() to log the message.


const newPromise = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Hello I LOVE You PRUNIMAAAA");
    },2000);
})
 
newPromise.then((data)=>{
    console.log(data);
})