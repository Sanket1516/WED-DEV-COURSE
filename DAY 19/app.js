// //Functions
// function poem(){
//     console.log("Jhonny jhonny yes papa .........................................");
// }

// poem();

// //roll a dice function from 1 to 6
// function roll(){
//     let n = Math.floor(Math.random()*6)+1;
//     console.log(n);
// }

// roll();

// //Function to give a average of three numbers 
// function average(a,b,c){
//     console.log(`The average of the given three number is : ${(a+b+c)/3}`);
// }

// average(4,5,6);

// //Function to print multiplication table of any number
// function table(n){
//     for(let i = 1;i<=10;i++){
//         console.log(`${n} X ${i} = ${n*i}`)
//     }
// }

// table(5);

// //Return the Sum from 1 to n
// function sum (n){
//     let i = 0;
//     for(let j =1;j<=n;j++){
//         i += j;
//     }
//     return i;
// };

// let final = sum(100);
// console.log("The sum is " + final);

// // Write a JavaScript function that returns array elements larger than a number.
// function larger(arr,n){
//     for(let i = 0;i<arr.length;i++){
//         if(arr[i]>n){
//             console.log(arr[i]);
//         }
//     }
// }

// let a = [12,25,44,75,82];
// let n = 10;
// larger(a,n);

// //to print only unique characters 
// function unique(s){
//     let uni = "";
//     for(let i = 0;i<s.length;i++){
//         if(!(uni.includes(s[i]))){
//             uni += s[i];
//         }
//         else{
//             continue;
//         }
//     }
//     return uni;
// }

// let a = "abgabfsthgdas";
// let ans = unique(a);
// console.log(ans);

// //Write a JavaScript function that accepts a list of country names as input and returns the longest country name as output.
// function longest(s){
//     let sum = s[0].length;
//     let ans = s[0];
//     for(let i =1;i<s.length;i++){
//         if(s[i].length>sum){
//             ans = s[i];
//             sum = s[i].length;
//         }
//         else{
//             continue;
//         }    
//     }
//     return ans;
// }

// ('a'|| 'A') || ('e'|| 'E') || ('i'|| 'I') || ('o'|| 'O') || ('u'|| 'U') 


// let country = ["Australia","Germany","India","USA"];
// let ans = longest(country);
// console.log(ans);

// //Write a JavaScript function to count the number of vowels in a String argument.
// function count(p){
//     let s = p.toLowerCase();
//     let count = 0;
//     for(let i =0;i<s.length;i++){
//         if(s[i]==('a') || s[i]==('e') || s[i]==('i') || s[i]==('o')||s[i]==('u')){
//             count++;
//         }        
//     }
//     return count;
// }

// let s = "aeiousjksyhAsdjyhgaAYGGDDGdudksdjhf";
// let ans = count(s);
// console.log(ans);


// //Write a JavaScript function to generate a random number within a range (start, end).

// function random(start , end){
//     let n = Math.floor(Math.random()*(end-start+1))+start;
//     return n;
// }

// let ans = random(5,10);
// console.log(ans);
