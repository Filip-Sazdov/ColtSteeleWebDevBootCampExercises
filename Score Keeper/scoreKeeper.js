let input = document.getElementById("playingToNumber");
let playingToNumberParagraph = document.getElementById("playing to number");

input.addEventListener("change", function () {
  playingToNumberParagraph.textContent = input.value;
});
let playerOneButton = document.getElementById("player one");
let playerTwoButton = document.getElementById("player two");
let resetButton = document.getElementById("reset");
let scoreOne = document.getElementById("player one score");
let scoreTwo = document.getElementById("player two score");
playerOneButton.addEventListener("click", function () {
  scoreOne.textContent = parseInt(scoreOne.textContent) + 1;
});

playerTwoButton.addEventListener("click", function () {
  scoreTwo.textContent = parseInt(scoreTwo.textContent) + 1;
});

resetButton.addEventListener("click", function () {
  scoreOne.textContent = 0;
  scoreTwo.textContent = 0;
  playingToNumberParagraph.textContent = 0;
  input.value = 0;
});
if (
  input.value === scoreOne.textContent ||
  input.value === scoreTwo.textContent
) {
  alert("yay");
}
