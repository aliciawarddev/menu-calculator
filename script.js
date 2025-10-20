// Array of menu items - each is an object with name, price, and description
const menuItems = [
    { name: 'Burger', price: 5.00, description: '' },
    { name: 'Burger of the Day', price: 5.95, description: '' },
    { name: 'Add Cheese', price: 0.50, description: '' },
    { name: 'Fries', price: 2.00, description: '' },
    { name: 'Side Salad', price: 2.50, description: '' },
    { name: 'Soft Drink', price: 2.00, description: '' },
    { name: 'Beer', price: 4.00, description: '' }
];

// Get the menu div from HTML where we'll add checkboxes
const menuDiv = document.getElementById('menu');

// Loop through each menu item and create checkbox with label
menuItems.forEach((item, index) => {
    const label = document.createElement('label');
    // Create HTML with checkbox input and item/price
    // data-price stores the price so we can retrieve it later
    label.innerHTML = `
    <input type="checkbox" data-index="${index}" data-price='${item.price}'>
    ${item.name} - $${item.price.toFixed(2)}
    `;
    menuDiv.appendChild(label) // Add the label to the menu div
});

// Function to calculate the total price of all checked items
function calculateTotal() {
    // Select all checkboxes that are currently checked
    const checked = document.querySelectorAll('input[type="checkbox"]:checked');
    // Use reduce() to sum up all the prices from checked items
    // Start with 0, then add each price from the data-price attribute
    return Array.from(checked).reduce((sum, cb) => sum + parseFloat(cb.dataset.price), 0);
}

// Function to generate commentary based on the total
function addCommentary(total) {
    if (total === 0) return 'Select items to order!';
    if (total < 10) return `Nice! You're spending $${total.toFixed(2)}. Light appetite!`;
    if (total < 20) return `Good choice! Total: $${total.toFixed(2)}. Solid meal!`;
    return `Wow! $${total.toFixed(2)}. Going all out!`; // Add this line
}

// Function to update the total display and commentary
function updateDisplay() {
    const total = calculateTotal(); // Get the current total
    // Update the total text in HTML
    document.getElementById('total').textContent = total.toFixed(2);
    // Update the commentary text in the HTML
    document.getElementById('commentary').textContent = addCommentary(total);
}

// Add change event listeners to all checkboxes
// When a checkbox is clicked, updateDisplay() runs
document.querySelectorAll('input[type="checkbox"]').forEach(cb => {
    cb.addEventListener('change', updateDisplay);
});

// Initialize the display on page load
updateDisplay();