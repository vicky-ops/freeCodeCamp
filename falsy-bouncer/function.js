// Falsy Bouncer
// Remove all falsy values from an array.

// Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

// Hint: Try converting each value to a Boolean.
function bouncer(arr){
    //Airbnb's Javascript stype guide using !!
    return arr.filter(elem=>!!elem)
}
bouncer([7,"ate","",false,9])
