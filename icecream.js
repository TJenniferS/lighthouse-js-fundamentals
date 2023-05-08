const iceCreamFlavours = ["chocolate", "vanilla", "cookies and cream", "rocky road", "strawberry"];
console.log(iceCreamFlavours);

// add a new flavour to the array
const newFlavour = "root beer";
const updatedFlavours = iceCreamFlavours.concat(newFlavour);

console.log(updatedFlavours); // output the entire array

// output the first and last flavours
console.log(updatedFlavours[0]); // first flavour
console.log(updatedFlavours[updatedFlavours.length - 1]); // last flavour

// output the total number of flavours
console.log(updatedFlavours.length);

