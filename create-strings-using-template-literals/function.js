// Create Strings using Template Literals
// A new feature of ES6 is the template literal. This is a special type of string that makes creating complex strings easier.
// Use an iterator method (any kind of loop) to get the desired output (shown below).

// [
//   '<li class="text-warning">no-var</li>',
//   '<li class="text-warning">var-on-top</li>',
//   '<li class="text-warning">linebreak</li>'
// ]
const result={
    success:["max-length","no-amd","prefer-arrow-function"],
    failure:["no-var","var-on-top","linebreak"],
    skipped:["no-extra-semi","no-dup-keys"]
};
function makeList(arr){
    //Only change code below this line
    //Declaring an array
    const failureItems=[];
    for(let i=0;i<arr.length;i++){
        failureItems.push(`<li class="text-warning">${arr[i]}</li>`)
    }
    return failureItems;
}
const failuresList=makeList(result.failure)