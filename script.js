// Variables
const startBtn = document.querySelector(".start");
const stopBtn = document.querySelector(".stop");
const resetBtn = document.querySelector(".reset");
const displayMin = document.querySelector("#minutes");
const displaySec = document.querySelector("#seconds");

let duration = 25;
let seconds = 60;
let clockMinutes = duration - 1;
let timer;

// timer setting function
let remainingTime = function () {
  displayMin.innerHTML = clockMinutes;
  seconds = seconds - 1;
  displaySec.innerHTML = seconds;
  if (seconds === 0) {
    clockMinutes = clockMinutes - 1;
    displayMin.innerHTML = clockMinutes;
    if (clockMinutes < 0) {
      clockMinutes = duration - 1;
      displayMin.innerHTML = duration;
      displaySec.innerHTML = "00";
      seconds = 60;
      clearInterval(timer);
    }
    seconds = 60;
  }
};

// event for start button
startBtn.addEventListener("click", function () {
  clearInterval(timer);
  timer = setInterval(remainingTime, 1000);
});

// event for stop button
stopBtn.addEventListener("click", function () {
  clearInterval(timer);
});

// event for reset button
resetBtn.addEventListener("click", function () {
  clearInterval(timer);
  displayMin.innerHTML = duration;
  seconds = 60;
  displaySec.innerHTML = "00";
});