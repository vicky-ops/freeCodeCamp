// Avoid Mutations and Side Effects Using Functional Programming
// Fill in the code for the function incrementer so it returns the value of the global variable fixedValue increased by one.

// The global variable
let fixedValue = 4;

function incrementer() {
  // Only change code below this line
  let fixed=fixedValue+1
  
  return fixed
    //return fixedValue++ --will not work 
  // Only change code above this line
}