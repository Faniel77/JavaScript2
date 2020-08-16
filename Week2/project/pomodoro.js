/**
  In this week 's project you'll be making a Pomodoro Clock!
  A user can specify how many minutes the timer should be set, and with a click on the play button it starts counting down!If the user wants to pause the timer, they can do so by clicking the pause button.

  If the timer is running, the user can 't change the session length anymore
  Use at least 3 functions
  Display minutes and seconds
  If the timer finishes the timer should be replaced by the message: Time 's up!
 * 
 */
'use strict';
const up = document.getElementById('up');
const down = document.getElementById('down');
const play = document.getElementById('play');
const pause = document.getElementById('pause');
const countDown = document.getElementById('countdown');
const workMin = document.getElementById('workSession');
const stop = document.getElementById('stop');

let counter = 0;
let seconds = 0;
let remaining = 0;
let isPaused = true;

// Event Listener for Play and stop buttons
play.addEventListener('click', () => {
  clearInterval(counter);
  if (isPaused) {
    startCountdown();
    play.innerHTML = `<i class="fas fa-pause"></i>`;
    isPaused = false;
  } else {
    remaining = seconds;
    play.innerHTML = `<i class="fas fa-play"></i>`;
    isPaused = true;
  }
});
stop.addEventListener('click', () => {
  clearInterval(counter);
  seconds = workMin.textContent * 60;
  counter = 0;
  remaining = 0;
  isPaused = true;
  play.innerHTML = `<i class="fas fa-play"></i>`;
  displayTimeLeft(seconds);
});

// Main Functions

function timer() {
  seconds--;
  if (seconds < 0) {
    clearInterval(counter);
    seconds = workMin.textContent * 60;
    countdown = setInterval(timer, 1000);
    return;
  }
  displayTimeLeft(seconds); // Keep updating display
}

function startCountdown() {
  if (remaining != 0) {
    seconds = remaining;
  } else {
    seconds = workMin.textContent * 60;
  }
  counter = setInterval(timer, 1000);
}

function displayTimeLeft(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainderSeconds = seconds % 60;
  countDown.textContent = `${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`;
}

// update work times
up.addEventListener('click', () => {
  let x = parseInt(countDown.textContent);
  if (x < 60) {
    countDown.textContent = x + 1;
    workMin.textContent = countDown.textContent;
  }
});
down.addEventListener('click', () => {
  let x = parseInt(countDown.textContent);
  if (x > 5) {
    countDown.textContent = x - 1;
    workMin.textContent = countDown.textContent;
  }
});
