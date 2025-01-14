hobbies=["football","swimming"]
for(let listOfHobby of hobbies){
    console.log(listOfHobby);//By this;It loops through each content of array from left to right console logging all it's values 
}

console.log(hobbies.map((hobby,index)=>{ //Note the parameter 
    return "Hobby No "+index+":"+hobby
}))