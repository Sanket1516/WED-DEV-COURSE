//Q1
let arr = [7,9,0,-2];
let n =Number(prompt("Enter th number : "));
console.log(arr.slice(arr.length-n));

//Q2
let s1 = prompt("Enter the string");
if(s1.length == 0){
    console.log("String is empty");
}
else{
    console.log("String is not empty");
}

//Q3
let n = Number(prompt("Enter the index"));
if(s1[n]>'A' && s1[n]<'Z'){
    console.log("The element is uppercase");
}
else{
    console.log("The element is lowercase");
}

//Q4
console.log(s1.trim());
let s = prompt("Enter the element : ");
if(s1.includes(s)){
console.log("The element is present");
}
else{
    console.log("element is not present");
}