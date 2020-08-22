/**

** Exercise 3: Guess the output **

Look at the bellow code snippet.
Can you guess the output? 
Write out your reasoning in 50 words or less.

*/



let a = 10;
const x = (function () {
  a = 12;
  return function () {
    alert(a);
  };
})();

x();
The output will be 12. The value of the variable 'x' is re-assigned inside the function and when the return function is looks inside its scope or the scope of its outer function.