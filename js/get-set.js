/* HTML elements have dozens of properties that you can access directly.

Some of them are read only, meaning you can get their value but not set it. 
Others can be used to both read and set values. 
You can find a full list on the Mozilla Developer Network. */

// https://developer.mozilla.org/en-US/docs/Web/API/element

let elem2 = document.querySelector("#test2");

// Get the ID of the element
// returns "main"
let id = elem2.id;
console.log(id);
// Set the ID of the element
elem2.id = "secondary";
console.log(elem2);
// Get the parentNode of the element
// This property is read-only
let parent = elem2.parentNode;
