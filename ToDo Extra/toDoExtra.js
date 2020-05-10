window.setTimeout(function () {
  let answer = prompt("What would you like to do?");
  let aggregatorArray = [];

  while (answer !== "quit") {
    if (answer == "new") {
      let listItem = prompt("What new item would you like to add?");
      aggregatorArray.push(listItem);
      console.log(listItem + " was added to list.");
    } else if (answer === "list") {
      console.log("***************");
      aggregatorArray.forEach(function (item, i) {
        // console.log(aggregatorArray.indexOf(item) + ". " + item);
        console.log(i + ". " + item);
      });
      console.log("***************");
    } else if (answer === "del") {
      itemNumber = Number(
        prompt("Enter number of item in order to remove it from the list")
      );
      console.log(
        aggregatorArray[itemNumber] + " has been successfully removed."
      );
      aggregatorArray.splice(itemNumber, 1);
    } else {
      console.log(
        'Please only use the keywords "new", "list", "del" or "quit"!'
      );
    }
    answer = prompt("What would you like to do next?");
  }
  console.log("You have exited the app.");
}, 500);
