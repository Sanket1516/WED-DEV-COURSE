let account = {
    username : "Sanket",
    Content : "Image",
    Likes : 10,
    repost : 10,
    tags :  ["asmith","Pinak","lavesh"]
};

//Create a random number between 1 to 100

let num = Math.floor(Math.random()*100)+1;
console.log(num);


//Create a random number between 1 to 5
let num2 = Math.floor(Math.random()*5)+1;
console.log(num2);

//Gusseing Game 
let max = prompt("Enter the maximum range : ");
let guess = Math.floor(Math.random()*max)+1;
let user_guess = Number(prompt("Enter the Number : "));
if(user_guess == guess){
    console.log("Congratulations You Win !");
}
else{
    console.log("Try Again");
}

//Dice Game 
let dice = Math.floor(Math.random()*6)+1;
console.log(dice);

//Object of cars

let cars = {
    name : "BMW",
    model : "X3",
    color : "Black"
};

console.log(cars.name);

//Object of Person

let person ={
    name : "Sanket",
    age : 18,
    city : "Shirpur"
};
//update the city value
person.city = "New York";
//add new attribute
person.country = "United States";
//print
console.log(person);