//add a para
let para = document.createElement('p');
para.innerText="I am Sanket";
let parent = document.querySelector('.box');
para.style.color="red";
para.style.fontWeight="900";
parent.appendChild(para);


//h3 with blue text hi iam blue
let heading = document.createElement('h1');
parent.appendChild(heading);
heading.style.color="blue";
heading.innerText="Hii i am a blue";

//div wih black border and pink background

let container = document.createElement('div');
container.style.border="1px solid black";
container.style.backgroundColor="pink";
document.body.appendChild(container);

//add h1 and para me too to it

let conheading = document.createElement('h1');
conheading.innerText="i am in div";
let conpara = document.createElement('p');
conpara.innerText="Me too..";

container.appendChild(conheading).appendChild(conpara);





