// JavaScript code for the website

// Function to display a message when a cat image is clicked
function displayMessage(catName) {
  alert("You clicked on " + catName);
}

// Function to change the background color of the table rows on mouseover
function highlightRow(row) {
  row.style.backgroundColor = "lightblue";
}

// Function to reset the background color of the table rows on mouseout
function resetRow(row) {
  row.style.backgroundColor = "";
}

// Add event listeners to the cat images
var catImages = document.querySelectorAll("table tbody tr td img");
catImages.forEach(function (image) {
  var catName = image.parentNode.nextElementSibling.textContent;
  image.addEventListener("click", function () {
    displayMessage(catName);
  });
});

// Add event listeners to the table rows for highlighting
var tableRows = document.querySelectorAll("table tbody tr");
tableRows.forEach(function (row) {
  row.addEventListener("mouseover", function () {
    highlightRow(row);
  });
  row.addEventListener("mouseout", function () {
    resetRow(row);
  });
});
