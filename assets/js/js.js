//global variables and constants for DOM elements
let computerChoice
const opponentChoice = document.getElementById("opponent-choice")
let playerChoice
const choice = document.getElementById("player-choice")
let result
const resultDisplay =document.getElementById("result")

/**
 * Added eventlister for the buttons
 */
document.addEventListener("DOMContentLoaded",function(){
    let buttons = this.getElementsByTagName("button");
        for(let button of buttons){
            button.addEventListener("click",function(){
                playerChoice = this.getAttribute("id");
                choice.innerHTML = playerChoice;
                opponent();
                runGame();
            })
        }
})

/**
 * function to determine the opponents choice
 */
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

/**
 * function to determine win,lose or draw conditions
 */

function runGame(){
    if(computerChoice === playerChoice){
        result = "its a draw!"
    }

    if(computerChoice === "rock" && playerChoice === "paper"){
        result = "You win!"
        incrementPlayerScore();
    }
    
    if(computerChoice === "rock" && playerChoice === "scissors"){
        result = "You lose!"
        incrementOpponentScore();
    }

    if(computerChoice === "scissors" && playerChoice === "rock"){
        result = "You win!"
        incrementPlayerScore();
    }

    if(computerChoice === "scissors" && playerChoice === "paper"){
        result = "You lose!"
        incrementOpponentScore();
    }

    if(computerChoice === "paper" && playerChoice === "scissors"){
        result = "You win!"
        incrementPlayerScore();
    }

    if(computerChoice === "paper" && playerChoice === "rock"){
        result = "You lose!"
        incrementOpponentScore();
    }

    resultDisplay.innerHTML = result

}
 /**
  * read players' current score for the dom and update
  */
function incrementPlayerScore(){

    let playerScore = parseInt(document.getElementById("player-score").innerText);
    document.getElementById("player-score").innerText = ++playerScore;
}

/**
 * read opponents current score and update if condtions are met
 */
function incrementOpponentScore(){

    let opponentScore = parseInt(document.getElementById("opponent-score").innerText);
    document.getElementById("opponent-score").innerText = ++opponentScore;
}
