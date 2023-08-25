// Map -> creates a new array by performing some operation on each array element.
let arr = [3, 5, 7];
let arr2 = arr.map((value, index, array) => {
  console.log(value, index, array);
  return value * value;
});
console.log(arr2);

// Filter -> Filters an array and creates a new array with the values that passes the condition.
arr = [45, 56, 23, 54, 43, 77];
arr2 = arr.filter((value) => {
  return value > 50;
});
console.log("\n", arr2);
