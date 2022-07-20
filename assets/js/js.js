//global variables and constants for DOM elements
let computerChoice
const opponentChoice = document.getElementById("opponent-choice")
let playerChoice
const choice = document.getElementById("player-choice")
let result
const resultDisplay =document.getElementById("result")


document.addEventListener("DOMContentLoaded",function(){
    let buttons = this.getElementsByTagName("button");
        for(let button of buttons){
            button.addEventListener("click",function(){
                playerChoice = this.getAttribute("id");
                choice.innerHTML = playerChoice;
                opponent()
                runGame()
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

function runGame(){
    if(computerChoice === playerChoice){
        result = "its a draw!"
    }

    if(computerChoice === "rock" && playerChoice === "paper"){
        result = "You win!"
    }
    
    if(computerChoice === "rock" && playerChoice === "scissors"){
        result = "You lose!"
    }

    if(computerChoice === "scissors" && playerChoice === "rock"){
        result = "You win!"
    }

    if(computerChoice === "scissors" && playerChoice === "paper"){
        result = "You lose!"
    }

    if(computerChoice === "paper" && playerChoice === "scissors"){
        result = "You win!"
    }

    if(computerChoice === "paper" && playerChoice === "rock"){
        result = "You lose!"
    }

    resultDisplay.innerHTML = result

}

function incrementPlayerScore(){

    let playerScore = parseInt(document.getElementById("player-score").innerText);
    document.getElementById("player-score").innerText = ++playerScore;
}

function incrementOpponentScore(){

    let opponentScore = parseInt(document.getElementById("opponent-score").innerText);
    document.getElementById("opponent-score").innerText = ++opponentScore;
}
