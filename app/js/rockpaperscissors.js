////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    return move || getInput(); 
}

function getComputerMove(move) {
    return move || randomPlay();
}

function getWinner(playerMove,computerMove) { 
    if (playerMove = computerMove) {
    return "It is a tie.";
    }  
    if (playerMove === 'rock'){
      if(computerMove === 'scissors'){
        return "Player wins!";
      } else {
        return "Computer wins!";
      }      
    }
    if (playerMove === 'scissors'){
      if(computerMove === 'rock'){
        return "Computer wins!"
      } else {
        return "Player wins!"
      }
    }
    if (playerMove === 'paper'){
      if(computerMove === 'Rock'){
        return "Player wins!"
      } else {
        return "Computer wins!"
      }
    }    


function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    return playerWins = 5 > computerWins||computerWins = 5 > playerWins
}
function playerWins(){
  while (getWinner = "Player Wins!") {
    playerWins += 1;
  }
}

function computerWins()
   while (getWinner = "Computer Wins!") {
     ComputerWins += 1;
   }

