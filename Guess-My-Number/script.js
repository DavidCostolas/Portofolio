'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let hightScore = 0;
document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    if (!guess) {
        document.querySelector('.message').textContent = 'No Number!';
    }
    else if (guess === secretNumber) {
        document.querySelector('.message').textContent = 'Correct Number!'
        document.querySelector('body').classList.add('background');
        document.querySelector('.number').textContent = secretNumber;
        if (score > hightScore) {
            hightScore = score;
            document.querySelector('.highscore').textContent = hightScore;
        }
    }
    else if (guess !== secretNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = guess > secretNumber ? 'Too high!': 'Too low'
            score--;
            document.querySelector('.score').textContent = score;
        }
        else {
            document.querySelector('.message').textContent = 'You lose the game'
            document.querySelector('.score').textContent = 0;
        }

    }
});

document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.guess').value = '';
    document.querySelector('body').classList.remove('background');
})