// Confirm the Ending
// Check if a string (first argument, str) ends with the given target
// string (second argument, target).

function confirmEnding(str,target){
    // ES2015 Solution
    // return str.endsWith(target)
    //Good old javascript string method
    return str.slice(str.length-target.length)==target
}
console.log(confirmEnding("Bastian","n"))
