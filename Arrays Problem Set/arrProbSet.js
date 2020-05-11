function printReverse(arr) {
  for (let index = arr.length - 1; index >= 0; index--) {
    console.log(arr[index]);
  }
}

function isUniform(arr) {
  let first = arr[0];
  for (let index = 1; index < arr.length; index++) {
    if (first !== arr[index]) {
      return false;
    }
  }
  return true;
}
// function same(arr) {
//   let zero = arr[0];
//   let result = function () {
//     arr.forEach((element) => {
//       if (zero !== element) {
//         return false;
//       } else {
//         return true;
//       }
//     });
//   };
//   return result;
// }
function sumArray(arr) {
  let sum = 0;
  arr.forEach((element) => {
    sum += element;
  });
  return sum;
}
function max(arr) {
  let maxNum = 0;
  arr.forEach((element) => {
    if (element > maxNum) {
      maxNum = element;
    }
  });
  return maxNum;
}
