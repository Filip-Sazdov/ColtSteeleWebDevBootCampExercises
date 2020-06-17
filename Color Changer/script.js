let button = document.querySelector("button");
let body = document.querySelector("body");
// body.style.backgroundColor = "white";
// button.addEventListener("click", function () {
//   if (body.style.backgroundColor === "white") {
//     body.style.backgroundColor = "purple";
//   } else {
//     body.style.backgroundColor = "white";
//   }
// });
button.addEventListener("click", () => {
  body.classList.toggle("purple");
});
