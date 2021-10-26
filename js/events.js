// You can use the EventTarget.addEventListener() method to listen
// for events on an element.

// You can find a full list of available events on the Mozilla Developer Network.

// Run the EventTarget.addEventListener() method on the element you want
// to listen for events on. It accepts two arguments: the event to listen for,
// and a callback function to run when the event happens.

// You can pass the event into the callback function as an argument.
// The event.target property is the element that triggered the event.
// The event object has other properties as well, many of them specific
// to the type of event that occurred.

let btn = document.querySelector("#test");

btn.addEventListener("click", function (event) {
  console.log(event); // The event details
  console.log(event.target); // The clicked element
});

/**
 * This works, but it's bad for performance
 * DON'T DO IT!
 */
let btns = document.querySelectorAll(".click-me");

for (let btn of btns) {
  btn.addEventListener("click", function (event) {
    console.log(event); // The event details
    console.log(event.target); // The clicked element
  });
}

// Event Delegation
/*
Fortunately, there’s a really easy and performant way to get a jQuery-like experience: 
event delegation or event bubbling.

Instead of listening for an event on specific elements, 
you attach your listener to a parent element that your elements are contained within, 
such as the window or document. Events that happens on elements inside it bubble up. 

We can then check to see if the item that triggered the event has a matching selector.
 */

// Listen for clicks on the entire window or parent container
document.addEventListener("click", function (event) {
  // If the clicked element has the `.click-me` class, it's a match!
  if (event.target.matches(".click-me")) {
    console.log(`Button clicked`);
  } else {
    console.log(`Button not clicked`);
  }
});

// data attributes
let elem = document.querySelector("#lunch");

// Get the value of the [data-sandwich] attribute
let sandwich = elem.getAttribute("data-sandwich");

// Set a value for the [data-sandwich] attribute
elem.setAttribute("data-sandwich", "turkey");

// Remove the [data-chips] attribute
elem.removeAttribute("data-chips");

// Check if an element has the `[data-drink]` attribute
if (elem.hasAttribute("data-drink")) {
  console.log("Add a drink!");
}
