/**
 
 ** Exercise 2: About me **

 1. See HTML
 2. Change the body tag 's style so it has a font-family of "Arial, sans-serif".
 3. Replace each of the spans(nickname, fav - food, hometown) with your own information.
 4. Iterate through each li and change the class to "list-item".
 5. See HTML
 6. Create a new img element and set its src attribute to a picture of you.Append that element to the page.
 */

'use strict';

// add a font family to the body
document.body.style.fontFamily = 'arial, sans-serif';

// select the spans by their ID's and add text to them
const ulElement = document.getElementById('ulElement');
ulElement.style.background = 'red';
ulElement.style.borderRadius = '5px';
ulElement.style.width = 'calc(100% - 400px)';
ulElement.style.margin = '0 auto';
const nickName = document.getElementById('nickname');
nickName.textContent = 'Don';
const favFood = document.getElementById('fav-food');
favFood.textContent = 'Fish';
const homeTown = document.getElementById('hometown');
homeTown.textContent = 'Asmara, Eritrea';
const liElements = document.querySelectorAll('li');
// liElements.style.listStyleType = 'none';

// loop through the li's and add them a class name
for (let i = 0; i < liElements.length; i++) {
  liElements[i].className = 'list-item';
  liElements[i].style.listStyleType = 'none';
  liElements[i].style.fontSize = '1.5rem';
  liElements[i].style.padding = '0.8rem';

//loop through the li's and add them a class name
for (let i = 0; i < liElements.length; i++) {
  liElements[i].className = 'list-item';

}
const myPhoto = document.createElement('img');
myPhoto.src = 'photo.jpg'; // add photo source
myPhoto.style.display = 'block';
myPhoto.style.borderRadius = '50%';
myPhoto.style.width = '18.75rem';
myPhoto.style.margin = '0 auto';
document.body.appendChild(myPhoto); // append photo to the page 
