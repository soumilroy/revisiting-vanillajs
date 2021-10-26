/*
You can use a for...of loop to loop over iterable objects. 
That includes strings, arrays, and other array-like objects such as 
NodeLists, HTMLCollections, and HTMLFormControlsCollection, but not plain objects ({}).

In a for...of loop, you define a variable to represent the current item of the 
iterable that you’re looping through. Inside the block (the stuff between curly brackets), 
you can use that variable to reference the current item.
*/

let sandwiches = ["turkey", "tuna", "ham", "pb&j"];

// logs "tuna", "ham", "turkey", "pb&j"
for (let sandwich of sandwiches) {
  console.log(sandwich);
}

// Array.forEach() and NodeList.forEach()

/*

The Array.forEach() and NodeList.forEach() methods provide a simpler way to 
iterate over arrays and NodeLists while still having access to the index.

You pass a callback function into the forEach() method. 
The callback itself accepts three arguments: the current item in the loop, 
the index of the current item in the loop, and the array itself. 

All three are optional, and you can name them anything you want.
 */

// logs 0, "tuna", 1, "ham", 2, "turkey", 3, "pb&j"
sandwiches.forEach(function (sandwich, index) {
  console.log(index); // index
  console.log(sandwich); // value
});

/*
Unlike with for, for...of, and for...in loops, you can’t end a forEach() callback 
function before it’s looped through all items. You can return to end the current
loop (like you would with continue), but there’s no way to break the loop.

Because of that, I generally prefer using a for...of loop unless I explicitly need the index.
 */

// Skip "ham"
// logs 0, "tuna", 2, "turkey", 3, "pb&j"
sandwiches.forEach(function (sandwich, index) {
  if (sandwich === "ham") return;
  console.log(index); // index
  console.log(sandwich); // value
});
