// Function to calculate the total price of all checked items
function calculateTotal() {
    const checked = document.querySelectorAll('input[type="checkbox"]:checked');
    return Array.from(checked).reduce((sum, cb) => sum + parseFloat(cb.dataset.price), 0);
}

// Function to generate commentary based on the total
function addCommentary(total) {
    if (total === 0) return 'Select items to order!';
    return '';
}

// Function to update the total display and commentary
function updateDisplay() {
    const total = calculateTotal();
    document.getElementById('total').textContent = total.toFixed(2);
    document.getElementById('commentary').textContent = addCommentary(total);
}

// Add change event listeners to all checkboxes
document.querySelectorAll('input[type="checkbox"]').forEach(cb => {
    cb.addEventListener('change', updateDisplay);
});

// Initialize the display on page load
updateDisplay();