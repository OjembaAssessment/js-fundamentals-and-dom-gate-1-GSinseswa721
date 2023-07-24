const mainTitle = document.querySelector('#title');
let curValue = 0;
const timerElement = document.getElementById("title")
const btnDecrement = document.querySelector('#decrement');
const btnIncrement = document.querySelector('#increment');
const btnReset = document.querySelector('#reset');

function updateTimerDisplay() {
    timerElement.textContent = curValue;
  }

function startCountdown() {
    const countdownInterval = setInterval(() => {
      curValue--;
      updateTimerDisplay();

      if (curValue <= 0) {
        clearInterval(countdownInterval);
        hideButtons();
        timerElement.textContent = "0";
      }
    }, 1000);
  }

btnIncrement.addEventListener('click', () => {
    curValue ++;
    mainTitle.textContent = curValue;
});

btnDecrement.addEventListener('click', () => {
    curValue --;
    mainTitle.textContent = curValue;
});

btnReset.addEventListener('click', () => {
    curValue = 0;
    mainTitle.textContent = curValue;
});

