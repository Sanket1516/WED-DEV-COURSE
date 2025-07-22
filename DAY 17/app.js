const favmovie = "bajrangi bhaijan";
let guess = prompt("Enter the movie name : ");
while((guess!= favmovie) && (guess!="quit")){
    guess = prompt("Wrong Guess Please try again");
}
if(guess == favmovie){
    console.log("Congratulatons");
}
else{
    console.log("You quit");
}