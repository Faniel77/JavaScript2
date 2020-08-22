/**

** Exercise 4: Guess more **

Look at the bellow code snippet.
Can you guess the output? 
Write out your reasoning in 50 words or less.

*/

const x = 9;

function f1(val) {
  val = val + 1;
  return val;
}
f1(x);
console.log(x);
//The Output is 9. variable 'x' has a primitive value and primitives are copied by their value. primitives are independent entities, so in this case the variable inside the function is independent of the variable outside the function. and the increment by 1 applies only to the variable inside the function and when we console.log(x) its result is still 9.

const y = {
  x: 9,
};

function f2(val) {
  val.x = val.x + 1;
  return val;
}
f2(y);
console.log(y);
//The value of x is 10. object variables are copied by their reference. when we use object values for  variables, its address/reference in the memory is stored in the variable not the value. so when we change the value of the object, its changes are visible in the variables with the same reference to the object
