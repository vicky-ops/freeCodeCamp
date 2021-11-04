// Return Largest Numbers in Arrays
// Return an array consisting of the largest number from each provided 
// sub-array. For simplicity, 
// the provided array will contain exactly 4 sub-arrays.

// Solution is like looping through the provided array
//With the help of Math.max finding largest number from the sub array
function largestofFour(arr){
    let largestNumbers=[]
    arr.forEach(elem=>{
        largestNumbers.push(Math.max(...elem))
    })
    return largestNumbers
}
largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);