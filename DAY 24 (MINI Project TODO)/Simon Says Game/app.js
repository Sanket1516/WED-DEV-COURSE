let gameseq = [];
let userseq = [];

let btns = ["yellow" , "red" , "purple" ,"green"];
let temphighscore = 0;
let highscore = 0;
let started = false;
let level = 0;
let h3 = document.querySelector("h3");
let h2 = document.querySelector("h2");
document.addEventListener("keypress",function(){
    console.log("game started");
    started = true;
    levelup();
});

function gameflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },500);
}

function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },100);
}



function levelup(){
    userseq = [];
    level++;
    h3.innerText = `Your High Score is ${highscore}`;
    h2.innerText = `Level ${level}`;
    let randidx = Math.floor(Math.random()*3);
    let randColor = btns[randidx];
    gameseq.push(randColor);
    console.log(gameseq);
    let randombtn = document.querySelector(`.${randColor}`);
    gameflash(randombtn);
}

function checkAns(index){

      if(userseq[index] === gameseq[index]){
       if(userseq.length == gameseq.length){
        temphighscore++;
        setTimeout(levelup(),1000);
       }
      }
      else{
        h2.innerHTML = `Game Over  ! Your score was <b>${level}</b> <br >Press any key to start !`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white"; 
        },150);
        reset();
      }
}

function btnPress(){
    let btn = this;
    userflash(btn);

    userColor = btn.getAttribute("id");
    userseq.push(userColor);
    checkAns(userseq.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress)
}

function reset(){
    if(temphighscore > highscore){
        highscore = temphighscore;
    }
    temphighscore = 0;
    started = false;
    gameseq = [];
    userseq = [];
    level = 0;
}








