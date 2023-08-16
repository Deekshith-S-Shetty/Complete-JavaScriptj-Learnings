// There are 7 primitive datatypes in javascript (nn-bb-ss-u).

// 1. null
let a = null;
console.log(a);

// 2. Number
let b = 420;
console.log(b);

// 3. Symbol
let c = Symbol("This is Symbol");
console.log(c);

// 4. String
let d = "This is String";
console.log(d);

// 5. Boolean
let e = true;
console.log(e);

// 6. BigInt
let f = BigInt("442200");
console.log(f);

// 7. undefined
let g = undefined;
console.log(g);

// To find a type of a variable use typeof.
console.log(typeof c);

// Non primitive data types are objects (item in an object in the below example).
let item = {
  first: true,
  second: false,
  third: undefined,
};
console.log(item);
