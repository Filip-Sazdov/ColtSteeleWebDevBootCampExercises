window.setTimeout(function () {
  // put all of your JS code from the lecture here

  let answer = prompt("What would you like to do?");
  let aggregatorArray = [];

  while (answer !== "q") {
    if (answer == "add") {
      let listItem = prompt("What new item would you like to add?");
      aggregatorArray.push(listItem);
    } else if (answer == "list") {

      console.log('*********');
      for (let i = 1; i < aggregatorArray.length; i++) {
        console.log(i, ':', aggregatorArray[i]);
      }
      console.log('*********');

    } else if (answer == "del") {
      let itemToRemove = parseInt(prompt('Which item would you like to remove? Please use index number from list!'))

      aggregatorArray.splice(itemToRemove, 1);
      console.log('Item removed!');
    } else {
      console.log(' Please only use the keywords "add", "list", or "q"!');
    }
    answer = prompt("What would you like to do next?");
  }
  console.log("You have exited the app.");
}, 5000);
