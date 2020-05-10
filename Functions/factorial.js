function factorial(num) {
  if (num === 0) {
    return 1;
  }
  let product = num;
  for (let i = num - 1; i > 0; i--) {
    product *= i;
  }
  return product;
}
