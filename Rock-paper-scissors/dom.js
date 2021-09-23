'use strict'

const message = document.getElementById('result');
const possibleChoice = document.querySelectorAll('button');
let userChoice;
let computerChoice;
let result;


possibleChoice.forEach(possibleChoice => possibleChoice.addEventListener('click', (e)=>{
    userChoice =e.target.id;
    generateChoice();
    runGame();
} ))

function generateChoice(){
    const numberGenerated = Math.floor(Math.random() * 3);

    if(numberGenerated === 0){
        computerChoice = 'rock';
    }
    if(numberGenerated === 1){
        computerChoice = 'paper';
    }
    if(numberGenerated === 2){
        computerChoice = 'scissors';
    }
}

function runGame(){
    if(computerChoice === userChoice){
        result = 'Draw!';
    }
    if(userChoice === 'rock' && computerChoice === 'paper'){
        result = 'Lost! Paper beats rock';
    }
    if(userChoice === 'rock' && computerChoice === 'scissors'){
        result = 'Won! Rock beats scissors';
    }
    if(userChoice === 'paper' && computerChoice === 'rock'){
        result = 'Won! Paper beats rock';
    }
    if(userChoice === 'paper' && computerChoice === 'scissors'){
        result = 'Lost! Scissors beats paper';
    }
    if(userChoice === 'scissors' && computerChoice === 'rock'){
        result = 'Lost! Rock beats scissors';
    }
    if(userChoice === 'scissors' && computerChoice === 'paper'){
        result = 'Won! Scissors beats paper';
    }
    message.innerHTML = result;
}