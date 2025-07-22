// //Find the maximun nmber in array using reduce function
// let nums = [1,2,3,4,5,6,7,8,9,10,11,12,13];
// let ans = nums.reduce(
//     (res,el)=>{
//         if(el>res){
//             return el;
//         }
//         else{
//             return res;
//         }
//     }
// )
// console.log(ans);

// //Check all the elements in the array are multiple of 10
// let arr = [10,20,30,40,50,40,70,80];
// let ans = arr.every(
//     (el)=>( el%10==0)
// );
// console.log(ans);

// //Function to find the minimum number in the array
// let arr = [1,2,3,4,5,6,7,8,9];
// let ans = arr.reduce(
//     (res,el)=>{
//         if(el<res){
//             return el;
//         }
//         else{
//             return res;
//         }
//     }
// )
// console.log(ans);

// // Square and sum the array elements using the arrow function and then find the average of the array.
// let arr = [1,2,3,4,5,6,78,95];
// let square = arr.map(
//     (el)=>(el*el)
// );

// let sum = square.reduce(
//     (res,el)=>(res+el)
// );

// let avg = sum / arr.length;

// //Create a new array using the map function whose each element is equal to the  original element plus 5
// let arr = [1,2,3,4,5,6,78,95];
// let newarray = arr.map(
//     (el)=>(el+5)
// );

// console.log(newarray);

// //. Create a new array whose elements are in uppercase of words present in the  original array
// let arr = ['A','b','C','D'];
// let newarray = arr.filter( (el)=> (el>='A' && el<='Z'));
// console.log(newarray);

