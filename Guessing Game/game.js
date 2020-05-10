let number = Number(prompt("Please enter a number: "));
if (number < 5) {
  alert("You have guessed too low!");
} else if (number === 5) {
  alert("You have guessed correctly!");
} else {
  alert("Your guess is too high!");
}
