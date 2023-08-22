/* 
  JavaScript functions are a block of code designed to perform a particular task.
  syntax: 
    function myfunc(parameter) {
        // Code
    }
    myfunc("hi");

  * parameter -> it is a data that you can pass to the function (in the above case parameter value is "hi").
  * myfunc("hi") -> here we call the function and pass the data "hi" to the function.
  * note -> The code inside the function won't be executed unless we call it (myfunc()).
  
  Why use functions?
    When we want to perform a particular task repeatedly, we would have to write the same code again and again,
    but with the help of function we can seperate the part of the code and reuse it whenever necessary.
*/

function findAverage(num1, num2) {
  return (num1 + num2) / 2;
}

console.log("The average of 10 and 15 is : ", findAverage(10, 15));
console.log("The average of 20 and 25 is : ", findAverage(20, 25));
console.log("The average of 55 and 56 is : ", findAverage(55, 56));
console.log("The average of 100 and 15 is : ", findAverage(100, 15));

/* 
  In the above code we don't have to implement the logic ofr findAverage everytime, but can use a function to 
  invoke that logic when necessary. Note that the values passed from the findAverage(10, 15) are the ones in 
  the functions (num1, num2).
  * findAverage, num1, num2 -> These names can be anything, and doesn't have to findAverage or num itself.
  * function -> It is a keyword and has to exactly "function".
*/
