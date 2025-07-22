//Mouse out Function
let div = document.querySelector("#div");
div.addEventListener("mouseout",function(){
    div.style.backgroundColor ="yellow ";
})

//Key press function

//not shift alt ctrl alt
let inp = document.querySelector("#inp");
inp.addEventListener("keypress",function(){
    console.log("hi");
})

//Scroll
div.addEventListener("Scroll",function(){
    div.style.backgroundColor ="black";
})

//load
//when the whole page is fully loaded
window.addEventListener("load",function(){
    document.body.style.background = "blue";
})

//
let btn = document.querySelector("#btn");
btn.addEventListener("click",function(){
    btn.style.backgroundColor = "green";
})

// Create an input element on the page with a placeholder ”enter your name” and an
//  H2 heading on the page inside HTML.
//  The purpose of this input element is to enter a user’s name so it should only input
//  letters from a-z, A-Z and space (all other characters should not be detected).
//  Whenever the user inputs their name, their input should be dynamically visible inside
//  the heading.
//  [Please note that no other character apart from the allowed characters should be
//  visible in the heading
let inp2 = document.querySelector("#inp2");
let heading = document.querySelector("h2");
inp2.addEventListener("change",function(event){
        heading.innerText = this.value;
    }
)
//just making the btn for experiment
let btn2 = document.createElement("button");
document.body.appendChild(btn2);
btn2.innerText="Press me to display";
btn2.style.display = "block";
btn2.style.margin = "20px";