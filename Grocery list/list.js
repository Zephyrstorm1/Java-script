// Select HTML elements
const itemInput = document.getElementById("itemInput");
const addItemButton = document.getElementById("addItem");
const groceryList = document.getElementById("groceryList");

// Add event listener to the "Add" button
addItemButton.addEventListener("click", addItem);

// Function to add a new item to the grocery list
function addItem() {
    const itemText = itemInput.value.trim();
    
    if (itemText !== "") {
        // Creating a new list item
        const listItem = document.createElement("li");
        listItem.innerHTML = `
            ${itemText}
            <button class="deleteItem">Delete</button>
        `;

        //for adding the new item to the grocery list
        groceryList.appendChild(listItem);

        // Clearing the input field
        itemInput.value = "";

        // Adding event listener to the "Delete" button for this item
        const deleteButton = listItem.querySelector(".deleteItem");
        deleteButton.addEventListener("click", () => {
            groceryList.removeChild(listItem);
        });
    }
}
