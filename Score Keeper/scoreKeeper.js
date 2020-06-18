let numberSelect = document.getElementById("playingToNumber");
// let playingToNumberParagraph = document.getElementById("playing to number");

// numberSelect.addEventListener("click", function () {
//   playingToNumberParagraph.innerHTML("5");
// });
let playerOneButton = document.getElementById("player one");
let playerTwoButton = document.getElementById("player two");
let scoreOne = document.getElementById("player one score");
let scoreTwo = document.getElementById("player two score");
playerOneButton.addEventListener("click", function () {
  scoreOne.textContent = parseInt(scoreOne.textContent) + 1;
});

playerTwoButton.addEventListener("click", function () {
  scoreTwo.textContent = parseInt(scoreTwo.textContent) + 1;
});
let resetButton = document.getElementById("reset");
resetButton.addEventListener("click", function () {
  scoreOne.textContent = 0;
  scoreTwo.textContent = 0;
});
