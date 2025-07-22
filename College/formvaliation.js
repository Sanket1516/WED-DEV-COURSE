let form = document.querySelector("form");
let formvalidation = (event)=>{
    let name = document.querySelector("#name").value.trim();
    let email = document.querySelector("#email").value.trim();
    let password = document.querySelector("#password").value.trim();
    let errname = document.querySelector("#errname");
    let erremail = document.querySelector("#erremail");
    let errpassword = document.querySelector("#errpassword");
    let isvalid=true;
    if(!name){
        isvalid=false;
        errname.innerText = "The name should not be null";
    }
    let emailregex = /[a-zA-Z0-9_\-\.]+[@][a-z]+[\.][a-z]{2,3}/;
    if(!emailregex.test(email)){
        erremail.innerText="Email is not valid";
        isvalid=false;
    }
    let numberregex=/[0-9]/;
    let letterregex=/[a-zA-z]/;
    if((!numberregex.test(password) || !letterregex.test(password))){
        errpassword.innerText="The password is not valid";
        isvalid=false;
    }
    if(!isvalid){
        event.preventDefault();
    }

    console.log("Form submitted");
    return isvalid;
}
form.addEventListener("submit",formvalidation);

