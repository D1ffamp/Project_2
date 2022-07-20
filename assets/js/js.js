//global variables and constants for DOM elements
let comptuterChoice
const opponentChoice = document.getElementById("opponent-choice")

document.addEventListener("DOMContentLoaded",function(){
    let buttons = this.getElementsByTagName("button");
        for(let button of buttons){
            button.addEventListener("click",function(){
                let choice = this.getAttribute("id");
                alert(`you clicked ${choice}`);
                opponent()
            })
        }
})

function opponent(){
    const randomNumber = Math.floor(Math.random()*3) +1

    if(randomNumber === 1){
        computerChoice ="rock"
    }
    if(randomNumber === 2){
        computerChoice ="paper"
    }
    if(randomNumber === 3){
        computerChoice ="scissors"
    }

    opponentChoice.innerHTML = computerChoice
}