/**
 
 ** Exercise 5: My favorite hobbies **
 
 Write a program that outputs each of these inside an HTML file
 Create an HTML and JavaScript file, link them together
 Use the map and / or forEach function to put each hobby into a list item
 Put the list items in an unordered list
 */
const ulElement = document.createElement('ul');
function createHTMLList(arr) {
  // your code goes in here
  arr.forEach(function (hobby) {
    const li = document.createElement('li');
    li.innerText = hobby;
    li.style.fontSize = '1.5rem';
    li.style.fontFamily = 'verdana';
    li.style.listStyle = 'none';
    ulElement.appendChild(li);
  });
  document.body.appendChild(ulElement);
}

const myHobbies = [
  'Meditation',
  'Reading',
  'Programming',
  'Hanging out with friends',
  'Going to the gym',
];
console.log(createHTMLList(myHobbies));
