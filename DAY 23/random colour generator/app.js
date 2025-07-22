let btn = document.querySelector('button');

btn.addEventListener('click',function(){
    let heading = document.querySelector("h3");
    let box = document.querySelector("div");

    let color = randomcolor();

    heading.innerText = color;
    box.style.backgroundColor = color;
    console.log("clicked");
})


function randomcolor(){
    let red = Math.floor(Math.random()*255);
    let green = Math.floor(Math.random()*255);
    let blue = Math.floor(Math.random()*255);

    let color = `rgb(${red},${green},${blue})`;
    return color;
}