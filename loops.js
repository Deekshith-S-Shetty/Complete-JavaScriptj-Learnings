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
