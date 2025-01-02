let hours = 0, minutes = 0, seconds = 0;
let interval = null;
let isRunning = false;
const timeDisplay = document.getElementById('time');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('reset');

function updateTime() {
  const h = hours < 10 ? `0${hours}` : hours;
  const m = minutes < 10 ? `0${minutes}` : minutes;
  const s = seconds < 10 ? `0${seconds}` : seconds;
  timeDisplay.textContent = `${h}:${m}:${s}`;
}

function startTimer() {
  if (isRunning) return;
  isRunning = true;
  interval = setInterval(() => {
    seconds++;
    if (seconds === 60) {
      seconds = 0;
      minutes++;
    }
    if (minutes === 60) {
      minutes = 0;
      hours++;
    }
    updateTime();
  }, 1000);
}

function stopTimer() {
  isRunning = false;
  clearInterval(interval);
}

function resetTimer() {
  stopTimer();
  hours = 0;
  minutes = 0;
  seconds = 0;
  updateTime();
}

startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
resetButton.addEventListener('click', resetTimer);
updateTime();