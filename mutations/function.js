// Mutations
// Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

// For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.

// The arguments ["hello", "hey"] should return false because the string hello does not contain a y.

// Lastly, ["Alien", "line"], should return true because all of the letters in line are present in Alien.
function mutation(arr){
    //Shamelessly copied
    //Mapping over an array to convert case for each string element 
    const arr2=arr.map(elem=>elem.toLowerCase())
    const test=arr[1].toLowerCase();
    const target=arr[0].toLowerCase();
    for(let i=0;i<test.length;i++){
        if(target.indexOf(test[i])<0) return false
    }return true
}
mutation(["hello", "hey"]);