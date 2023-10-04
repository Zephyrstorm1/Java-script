// Initialize count to 0
let count = 0;

// Select HTML elements
const decrementBtn = document.getElementById("decrement");
const incrementBtn = document.getElementById("increment");
const resetBtn = document.getElementById("reset");
const countElement = document.getElementById("count");

// Add event listeners for increment, decrement, and reset

// Event listener for the "Decrement" button
decrementBtn.addEventListener("click", () => {
    // Decrease the count by 1
    count--;
    // Update the displayed count
    updateCount();
});

// Event listener for the "Increment" button
incrementBtn.addEventListener("click", () => {
    // Increase the count by 1
    count++;
    //for Updating the displayed count
    updateCount();
});

// Event listener for the "Reset" button
resetBtn.addEventListener("click", () => {
    // Reset the count to 0
    count = 0;
    // for Updating the displayed count
    updateCount();
});

// Function to update the count displayed

function updateCount() {
    // Update the text content of the count element with the current count value
    countElement.textContent = count;
}
