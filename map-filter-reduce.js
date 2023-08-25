// Map -> creates a new array by performing some operation on each array element.
let arr = [3, 5, 7];
let arr2 = arr.map((value, index, array) => {
  console.log(value, index, array);
  return value * value;
});
console.log(arr2);
