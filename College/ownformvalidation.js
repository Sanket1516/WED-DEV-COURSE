let form = document.querySelector("form");

let formvalidation= (event)=>{
let name = document.querySelector("#name").value;
let email = document.querySelector("#email").value;
let password = document.querySelector("#password").value; 

let nameerr = document.querySelector("#errname");
let emailerr = document.querySelector("#erremail");
let passerr = document.querySelector("#errpassword");

let isvalid = true;

if(!name){
    isvalid = false;
    nameerr.innerText="The name is correct ";
}

let emailregex = /[a-zA-z0-9_/./-]+[@][a-z]+[\.][a-z]{2,3}/;

if(!emailregex.test(email)){
    isvalid=false;
    emailerr.innerText="The emmail is not valid";
}

let containL= /[a-zA-Z]/;
let containn= /[0-9]/;
if(! containL.test(password) || !containn.test(password)){
    isvalid = false;
    passerr.innerText="The password is incorrct ";
}

if(!isvalid){
    event.preventDefault();
}

return isvalid;
}

form.addEventListener("submit",formvalidation);
