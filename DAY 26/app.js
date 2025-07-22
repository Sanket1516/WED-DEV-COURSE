// let url = "https://catfact.ninja/fact";
// fetch(url)   //it will return one promise
// .then((res)=>{
//     return res.json();  //it will give unreadalble response and we have parse it in json 
//     //it will also return one promise
// })
// .then((res)=>{
//     console.log(res); // res is a object returend which is full of answers
//     //result of this promise is the object returend by api
// })
// .catch((err)=>{
//     console.log("Error occured : " , err);
// })



// let url = "https://catfact.ninja/fact";
// fetch(url)   //it will return one promise
// .then((res)=>{
//     return res.json();  //it will give unreadalble response and we have parse it in json 
//     //it will also return one promise
// })
// .then((res)=>{
//     console.log(res.fact); // res is a object returend which is full of answers
//     //result of this promise is the object returend by api
//     return fetch(url)
//     //we call another api after this one get executed
// })
// .then((res)=>{
//     return res.json();
// })
// .then((res)=>{
//     console.log(res.fact);
// })
// .catch((err)=>{
//     console.log("Error occured : " , err);
// })


// //Using Axios Fuction
// let url = "https://catfact.ninja/fact";


// let btn = document.querySelector("#btn");
// let para = document.querySelector("p");


// btn.addEventListener("click",async ()=>{
//     let ans = await getapi();
//     para.innerText = ans;
// });



// async function getapi(){
//     try{
//         let res = await axios.get(url);
//         return (res.data.fact);
//     }
//     catch(e){
//         return ("Error named : "+e+" Found");
//     }
// }


// //Getting dog image using dog api
// url = "https://dog.ceo/api/breeds/image/random";
// let btn = document.querySelector("#btn");
// let image = document.querySelector("img");
// btn.style.display = "Block";
// btn.addEventListener("click", async()=>{
//     let data = await getdogpics();
//     console.log(data);
//     image.setAttribute("src",data);
// })

// async function getdogpics(){
//     try{
//         let res = await axios.get(url);
//         return (res.data.message);
//     }
//     catch(e){
//         return ("Error sanket "+e);
//     }
// }

