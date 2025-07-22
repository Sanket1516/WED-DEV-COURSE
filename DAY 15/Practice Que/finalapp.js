//Q1
let n = prompt("Enter the number : ");
if(n%10 == 0){
    console.log("Good");
}
else{
    console.log("Bad");
}
//Q2
let name = prompt("Enter your name : ");
let age = prompt("Enter your age : ");
console.log(`${name} is ${age} years old`);
//Q3
let a = Number(prompt("Enter the number : "));
switch(a){
    case 1:
        console.log("January,February,March");
        break;
    case 2:
        console.log("april,May,June");
        break;
    case 3:
        console.log("July,August,September");
        break;
    case 4:
        console.log("October,November,December");
        break;
    default:
        console.log("Enter the valid quater");
};

//Q4
let s = prompt("Enter the string : ");
if(s[0] == ('A' || 'a')  && s.length>=5){
    console.log("given string is golden");
}
else{
    console.log("given string is not golden");
}

//Q5
let a = Number(prompt("Enter the First number : "));
let b = Number(prompt("Enter the Second number : "));
let c = Number(prompt("Enter the Third number : "));

if(a>b && a>c){
    console.log(`${a} is largest`);
}
else if(b>a && b>c){
    console.log(`${b} is largest`);
}
else{
    console.log(`${c} is largest`);
}

//Q6
let a = Number(prompt("Enter the First number : "));
let b = Number(prompt("Enter the  Second number : "));
if(a%10 == b%10){
    console.log("The both are having same last digits ");
}
else{
    console.log("The both are not having same last digits ");
}