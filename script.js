// Get elements
const decrementButton = document.getElementById('decrement');
const incrementButton = document.getElementById('increment');
const countSpan = document.getElementById('count');

let count = 0;

// Function to update the count display
function updateCount() {
    countSpan.textContent = count;
}

// Event listener for decrement button
decrementButton.addEventListener('click', () => {
    count--;
    updateCount();
});

// Event listener for increment button
incrementButton.addEventListener('click', () => {
    count++;
    updateCount();
});

// Initial count update
updateCount();
