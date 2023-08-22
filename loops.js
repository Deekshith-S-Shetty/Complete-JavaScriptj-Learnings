// Loops are used to perform repeated actions.
// Example: if you are assigned to print a number from 1 to 100, you don't have to console.log() 100 times but can use loops to perform it in just few lines.

// TYPES OF LOOPS
// 1. for loop -> loop a block of code no. of times.\

// Syntax: for(initialExpression[runs only once]; condition; updateExpression) {...}
for (let i = 0; i < 100; i++) {
  console.log(i); // Prints a number from 0 to 99
}

/* The loop will iterate 100 times and the value of i increases by 1 for every itertion.
First Iteration: i = 0, check i < 100, and execute the code(print i), increment i(i = 1);
Second Iteration: i = 1, check i < 100, and execute the code(print i), i = 2;
...till i = 99;
Last Iteration: i = 100, check i < 100 which is false, do not execute the loop, terminate. */

// -------------------------------------------------------------------------------------------

// 2. for in loop -> loops through the keys of an object.

let obj = {
  student1: 90,
  student2: 68,
  student3: 45,
  student4: 99,
  student5: 94,
};

// For objects for-in loop gets all keys.
for (let a in obj) {
  console.log(a); // Prints only keys (student1, student2,... student5)
  console.log(obj[a]); // Prints only values (90, 68,... 94)
}

// For arrays for in loop gets the indexes.
let arr = [4, 5, 6, 8];
for (let a in arr) {
  console.log(a); // Prints index of all the elements of array (0, 1, 2, 3)
  console.log(arr[a]); // Prints values of all the array
}

// 3. for of loop -> loops through the iterables (arrays, strings, etc) (since objects are not iterable "for-of" does not work on objects).
for (let a of arr) {
  console.log(a); // Prints elements of array (4, 5, 6, 8).
}

// 4. while loop -> loops a block of code on a specific condition.
let a = 1;
while (a > 0) {
  // The loop will run until a is greater than 0.
  console.log("a is greater than 0");
  a--;
}
// Note: If the condition never becomes false, the loop will never end and might crash the runtime.
