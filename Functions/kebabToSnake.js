function kebabToSnake(str) {
  if (str.includes("-")) {
    let res = str.replace("-", "_");
    return res;
  } else {
    return str;
  }
}
