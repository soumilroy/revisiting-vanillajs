// The first button
let button = document.querySelector("button");
console.log(button);
// The first element with the .bg-red class
let red = document.querySelector(".bg-red");
console.log(red);
// The first element with a data attribute of snack equal to carrots
let carrots = document.querySelector('[data-source="yes"]');
console.log(carrots);
// If element doesn't exists, it returns null
let elem = document.querySelector("#doesntexist");
console.log(elem);

if (!elem) {
  console.log(`No element selected!`);
}

// select multiple elements
// Get all button elements
let buttons = document.querySelectorAll("button");
console.log(buttons);
// Get all elements with the .bg-red class
let elemsRed = document.querySelectorAll(".bg-red");
console.log(elemsRed);
// Get all elements with the [data-snack] attribute
let elemsSnacks = document.querySelectorAll("[data-source].bg-blue");
console.log(elemsSnacks);

// returns NodeList

// check if element matches selector
/*
You can use the Element.matches() method to check if an element would be selected by a 
particular selector or set of selectors. Returns true if the element is a match, and false when it’s not.
 */

if (red.matches("[data-button]")) {
  console.log("Yummy snack!");
} else {
  console.log("No snacks");
}
