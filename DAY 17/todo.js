let todo = [];
while(true){
    let choice = prompt("Enter the choice : ")
    if(choice == '1'){
        let i = prompt("Enter what to add : ");
        todo.push(i);
    }

    else if(choice == '2'){
        for(i of todo){
            console.log(i, todo[i]);
        }
    }

    else if(choice == '3'){
        let i = Number(prompt("enter the index of element to remove : "));
        todo.splice(i , 1);
    }

    else{
        console.log("You quit : ");
        break;
    }
}