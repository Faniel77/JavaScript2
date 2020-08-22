/**
 
 ** Exercise 5: The lottery machine **
 
Don't you just love the thrill of the lottery? What if I told you we can make our own lottery machine? Let'
 s get started!

   Write a
 function that takes 4 arguments.

   - A start value
   - An end value
   - A callback that executes if the number is divisible by 3
   - A callback that executes if the number is divisible by 5

 The  function should first generate an array containing values from start value to end value(inclusive).

 Then the  function should take the newly created array and iterate over it, and calling the first callback
 if the array value is divisible by 3.

 The function should call the second callback
 if the array value is divisible by 5.

 Both functions should be called
 if the array value is divisible by both 3 and 5.

*/

function threeFive(startIndex, stopIndex, threeCallback, fiveCallback) {
  const numbers = [];
  for (let i = startIndex; i <= stopIndex; i++) {
    numbers.push(i);
  }
  numbers.forEach((num) => {
    if (num % 3 === 0) {
      threeCallback(num);
    }
    if (num % 5 === 0) {
      fiveCallback(num);
    }
  });
}
function sayThree(denominator) {
  return function (num) {
    console.log(`${num} is divisible by ${denominator}`);
  };
}
function sayFive(denominator) {
  return function (num) {
    console.log(`${num} is divisible by ${denominator}`);
  };
}

threeFive(10, 15, sayThree(3), sayFive(5));

// Should create an array [10,11,12,13,14,15]
// and call sayFive, sayThree, sayThree, sayFive
