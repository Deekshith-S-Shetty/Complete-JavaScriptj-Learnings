// Stores a sequence of values that can be accessed using arr[index]. index starts from 0.
let arr = [77, 98, 86, 34, 45, "absent"];
console.log(arr[0]); // Prints 77
console.log(arr[99]); // Prints "undefined" because 99 is not initialized.
console.log(arr.length); // length of the array is 6.

// Array Methods

// 1. join -> Joins all the elements with specified string in between.
console.log(arr.join(" and ")); // output: 77 and 98 and 86 and 34 and 45 and absent

// 2. pop -> remove and return the last element from an array (mutates the main array).
console.log(arr.pop()); // Prints "absent"
console.log(arr); // We can see the "absent" removed from the array

// 3. push -> Adds a new element to the end of an array.
arr.push("unknown");
console.log(arr);

// 4. shift -> remove and return the first element from an array.
console.log(arr.shift());
console.log(arr);

// 5. unshift -> adds a new element to the beginning of an array.
arr.unshift(89);
console.log(arr);

/* 
  Exercise:
   *1. Explore other array methods like delete, sort, slice and splice.
    2. Use splice method to remove and add elements from an array at the same time.
    3. Use for loop to print the elements in the array.
*/
