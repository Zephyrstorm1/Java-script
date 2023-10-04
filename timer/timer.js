// Variables to store timer state
let timerInterval;
let isTimerRunning = false;
let minutes = 0;
let seconds = 0;

// Select HTML elements
const minutesDisplay = document.getElementById("minutes");
const secondsDisplay = document.getElementById("seconds");
const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const resetButton = document.getElementById("reset");

// Add event listeners to buttons

// Start button
startButton.addEventListener("click", () => {
    if (!isTimerRunning) {
        startTimer();
        isTimerRunning = true;
    }
});

// Stop button
stopButton.addEventListener("click", () => {
    if (isTimerRunning) {
        stopTimer();
        isTimerRunning = false;
    }
});

// Reset button
resetButton.addEventListener("click", () => {
    resetTimer();
    isTimerRunning = false;
});

// Function to start the countdown timer
function startTimer() {
    timerInterval = setInterval(updateTimer, 1000);
    startButton.disabled = true;
    stopButton.disabled = false;
    resetButton.disabled = true;
}

// Function to stop the countdown timer
function stopTimer() {
    clearInterval(timerInterval);
    startButton.disabled = false;
    stopButton.disabled = true;
    resetButton.disabled = false;
}

// Function to update the countdown timer
function updateTimer() {
    if (seconds < 59) {
        seconds++;
    } else {
        seconds = 0;
        if (minutes < 59) {
            minutes++;
        } else {
            // Timer has reached 60 minutes, so stop it
            stopTimer();
            isTimerRunning = false;
        }
    }

    // Display the updated time
    updateDisplay();
}

// Function to reset the countdown timer
function resetTimer() {
    stopTimer();
    minutes = 0;
    seconds = 0;
    updateDisplay();
}

// Function to update the timer display
function updateDisplay() {
    minutesDisplay.textContent = minutes.toString().padStart(2, "0");
    secondsDisplay.textContent = seconds.toString().padStart(2, "0");
}
