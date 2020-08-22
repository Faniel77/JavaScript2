/**
 
 ** Exercise 2: The lottery machine **

Write a function called removeDuplicates. This function accept an array as an argument
does not return anything but removes any duplicate elements from the array.

 The  function should remove duplicate elements.So the result should be:

   
 */

// WRITE YOUR FUNCTION HERE

const letters = ['a', 'b', 'c', 'd', 'a', 'e', 'f', 'c', 'b'];

function removeDuplicates(arr) {
  arr = arr.filter(function (item, index, inputArray) {
    return inputArray.indexOf(item) == index;
  });
  return arr;
}

const newArray = removeDuplicates(letters);

if (JSON.stringify(newArray) === JSON.stringify(['a', 'b', 'c', 'd', 'e', 'f']))
  console.log('Hooray!');
