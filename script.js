'use strict';

let score = 20;
let highscore = 0;
let secretNumber = Math.trunc(Math.random() * 20 + 1);

const dispalyMsg = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    dispalyMsg('Its not a number');
  } else if (guess === secretNumber) {
    document.querySelector('body').style.background = '#60b347';
    dispalyMsg('You win');
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    if (score >= 1) {
      highscore = score;

      document.querySelector('.highscore').textContent = score;
    } else {
      dispalyMsg('You lost');
      document.querySelector('.score').textContent = 0;
    }
  } else {
    dispalyMsg(guess > secretNumber ? 'To hight' : 'To low');
    score--;
    document.querySelector('.score').textContent = score;
  }
});

document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('.message').textContent = 'Star guesing';
  score = 20;
  secretNumber = Math.trunc(Math.random() * 5 + 1);
  document.querySelector('body').style.background = '#222';
});
