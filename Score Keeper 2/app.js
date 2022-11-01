let playerOne = document.getElementById('player1');
let playerTwo = document.getElementById('player2');
let reset = document.getElementById('reset');

let spanP1 = document.getElementById('P1');
let spanP2 = document.getElementById('P2');

let scorePlayerOne = 0;
let scorePlayerTwo = 0;

let playUpTo = document.getElementById('numberInput');
playUpTo.defaultValue = 1;

function disableInput() {
  playerOne.disabled = true;
  playerTwo.disabled = true;
  playerOne.classList.add('gray');
  playerTwo.classList.add('gray');
}

playerOne.addEventListener('click', function () {
  scorePlayerOne++;
  spanP1.innerText = scorePlayerOne;
  if (scorePlayerOne === parseInt(playUpTo.value)) {
    disableInput();
    spanP1.classList.add('win');
    spanP2.classList.add('loss');
  }
})

playerTwo.addEventListener('click', function () {
  scorePlayerTwo++;
  spanP2.innerText = scorePlayerTwo;
  if (scorePlayerTwo === parseInt(playUpTo.value)) {
    disableInput();
    spanP1.classList.add('loss');
    spanP2.classList.add('win');
  }
})
reset.addEventListener('click', function () {
  scorePlayerOne = 0;
  scorePlayerTwo = 0;
  spanP1.innerText = scorePlayerOne;
  spanP2.innerText = scorePlayerTwo;
  playerOne.disabled = false;
  playerTwo.disabled = false;
  playerOne.classList.remove('gray');
  playerTwo.classList.remove('gray');
  spanP1.classList.remove('win', 'loss');
  spanP2.classList.remove('win', 'loss');
})


