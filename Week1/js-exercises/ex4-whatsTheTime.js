/**
 
 ** Exercise 4: What 's the time? **
 
 Why wear a watch when you can check the time, live in your webpage ?

  1. Create a basic HTML file
  2. in the HTML file Include a script tag and link the JavaScript file
  3. Inside the JS file, write a function that adds the current time to the webpage. Make sure it 's written in the HH:MM:ss notation (hour, minute, second). Hint: use `setInterval()` to make sure the time stays current
  4. Have the function execute when it 's loading in the browser

 */

'use strict';
function updateClock() {
  var currentTime = new Date();

  var currentHours = currentTime.getHours();
  var currentMinutes = currentTime.getMinutes();
  var currentSeconds = currentTime.getSeconds();

  //Pad the minutes and seconds with leading zeros, if required
  currentMinutes = (currentMinutes < 10 ? '0' : '') + currentMinutes;
  currentSeconds = (currentSeconds < 10 ? '0' : '') + currentSeconds;

  //Choose either "AM" or "PM" as appropriate
  var timeOfDay = currentHours < 12 ? 'AM' : 'PM';

  //Convert the hours component to 12-hour format if needed
  currentHours = currentHours > 12 ? currentHours - 12 : currentHours;

  // Convert an hours component of "0" to "12"
  currentHours = currentHours == 0 ? 12 : currentHours;

  //Compose the string for display
  var currentTimeString =
    currentHours + ':' + currentMinutes + ':' + currentSeconds + ' ' + timeOfDay;

  // Update the time display
  document.getElementById('clock').firstChild.nodeValue = currentTimeString;
}
window.onload = updateClock();
setInterval('updateClock()', 1000);
