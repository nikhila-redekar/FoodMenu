"use strict";

let menu = {
    drinks: [
        "Water", "Tea", "Sweet Tea",
        "Coke", "Dr. Pepper", "Sprite"
    ],
    entrees: [
        "Hamburger w/ Fries",
        "Grilled Cheese w/ Tater Tots",
        "Grilled Chicken w/ Veggies",
        "Chicken Fried Steak w/ Mashed Potatoes",
        "Fried Shrimp w/ Coleslaw",
        "Veggie Plate"
    ],
    desserts: [
        "Cheesecake", "Chocolate Cake", "Snickerdoodle Cookie"
    ]
};

window.onload = function() {
    // Get references to the category and item select elements
    let categorySelect = document.getElementById("categorySelect");
    let itemSelect = document.getElementById("itemSelect");

    // Add event listener to the category select element
    categorySelect.addEventListener("change", function() {
        // Clear existing items in the item select element
        itemSelect.innerHTML = "";

        // Get selected category
        let selectedCategory = categorySelect.value;

        // Get items for the selected category
        let items = menu[selectedCategory];

        // Populate the item select element with items from the selected category
        items.forEach(item => {
            let option = document.createElement("option");
            option.text = item;
            itemSelect.appendChild(option);
        });
    });

    // Trigger change event to populate items initially
    categorySelect.dispatchEvent(new Event("change"));
};
