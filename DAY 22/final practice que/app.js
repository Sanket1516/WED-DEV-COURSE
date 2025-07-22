// Create a new input and button element on the page using JavaScript only. Set the  text of button to "Click me'
let input = document.createElement('input');
let btn = document.createElement('button');

btn.innerText = "Click ME!!";

let parent = document.body;
parent.append(input);
parent.append(btn);

input.style.display="block";

//Add following attributes to the element : 
// Change placeholder value of input to "username" 
// Change the id of button to "btn' 
input.setAttribute("placeholder","username");

btn.setAttribute("id","btn");


//Access the btn using the querySelector and button id. Change the button background color to blue and text color to white.
let stylebtn = document.querySelector('#btn');
stylebtn.style.backgroundColor = "blue";
stylebtn.style.color = "white";

// Create an hl element on the page and set its text to "DOM Practice" underlined. 
//Change its color to purple. 
let heading = document.createElement('h1');
heading.innerText ="DOM PRACTICE";
heading.style.textDecoration = "underline";
heading.style.color = "purple";
parent.prepend(heading);

// Create a p tag on the page and set its text to "Sanket KISHOR Mali", where KISHOR is bold.  



let para = document.createElement('p');
para.innerHTML = "Sanket <b> KISHOR </b> Mali"; 
para.style.fontSize = "50px";
parent.prepend(para);