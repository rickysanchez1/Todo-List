// 3 variables to get values from ids
const inputField = document.getElementById("inputField");
const addButton = document.getElementById("addButton");
const myList = document.getElementById("todoList");

// event listener for click to start function
addButton.addEventListener('click', function() {
    // obtain value from input field
    const inputValue = inputField.value.trim();

    // Check if the input field is not empty
  if (inputValue !== "") {
    // Create a new list element
    const newItem = document.createElement("li");
    // Set the content of the list item to the input value
    newItem.textContent = inputValue;  
    
    // Add the new list item to the ul
    myList.appendChild(newItem);
    
    // Clear the input field after adding the item
    inputField.value = "";
  } else {
    alert("Please enter something!");
  }

});

