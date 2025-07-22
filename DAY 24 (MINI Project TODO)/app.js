let inp = document.querySelector("input");
let btn = document.querySelector("button");
let ul = document.querySelector("ul");
btn.addEventListener("click",function(){
    console.log("pressed");
    let li = document.createElement("li");
    let delbtn = document.createElement("button");
    li.innerText = inp.value;
    ul.appendChild(li);
    delbtn.innerText = "Delete";
    li.appendChild(delbtn);
    inp.value="";
    delbtn.addEventListener("click",function(){
        delbtn.parentElement.remove();
    }) 
})