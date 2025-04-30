// Starting base price
let startPrice = 750;

// Get DOM elements
const colorSelect = document.getElementById("colorSelect");
const engravingCheckbox = document.getElementById("engraving");
const packagingCheckbox = document.getElementById("packaging");

// Function to update the price
function updateprice() {
let newPrice = startPrice; // Start from base

// Update for color
const colorValue = colorSelect.value;
if (colorValue === "2") {
  newPrice += 20; // Green adds R20
} else if (colorValue === "3") {
  newPrice += 30; // Black adds R30
}

// Update for engraving
if (engravingCheckbox.checked) {
  newPrice += 5;
}

// Update for packaging
if (packagingCheckbox.checked) {
  newPrice += 8;
}

// Update the total price display on the front page
document.getElementById('totalprice').innerText = "R" + newPrice;
}

// Function to open the modal
function openModale() {
document.getElementById("buyModal").style.display = "flex";
updateprice(); // Update price when modal opens
}

// Function to close the modal
function closeModale() {
document.getElementById("buyModal").style.display = "none";
}

// Listen to changes
colorSelect.addEventListener('change', updateprice);
engravingCheckbox.addEventListener('change', updateprice);
packagingCheckbox.addEventListener('change', updateprice);

// Make sure the script runs after everything is loaded
document.addEventListener('DOMContentLoaded', function () {
updateprice(); // Initial update
});

updateprice()




