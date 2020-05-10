window.setTimeout(function () {
  // put all of your JS code from the lecture here

  let answer = prompt("What would you like to do?");
  let aggregatorArray = [];

  while (answer !== "quit") {
    if (answer == "new") {
      let listItem = prompt("What new item would you like to add?");
      aggregatorArray.push(listItem);
    } else if (answer == "list") {
      console.log(aggregatorArray);
    } else {
      console.log(' Please only use the keywords "new", "list", or "quit"!');
    }
    answer = prompt("What would you like to do next?");
  }
  console.log("You have exited the app.");
}, 500);
