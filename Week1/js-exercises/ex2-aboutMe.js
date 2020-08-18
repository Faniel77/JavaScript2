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
const nickName = document.getElementById('nickname');
nickName.textContent = 'Don';
const favFood = document.getElementById('fav-food');
favFood.textContent = 'Fish';
const homeTown = document.getElementById('hometown');
homeTown.textContent = 'Asmara, Eritrea';
const liElements = document.querySelectorAll('li');

//loop through the li's and add them a class name
for (let i = 0; i < liElements.length; i++) {
  liElements[i].className = 'list-item';
}
const myPhoto = document.createElement('img');
myPhoto.src = 'photo.jpg'; //add photo source
document.body.appendChild(myPhoto); //append photo to the page
