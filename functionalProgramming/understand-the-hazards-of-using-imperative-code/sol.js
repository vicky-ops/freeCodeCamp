//Here is an Array
const arr=[1,2,3,4,5,6,7,8,9]
//Empty Arr declaration for pushing
let empty=[]
//Comparision array for reference
const comparision=[2,4,6,8]
//Task is to remove the odd memebers of array
//return a even only list of num [2,4,6,8]
//using both for loop and map()
//iterative approach using loop
// for(let i=0;i<arr.length;i++){
//     arr[i]%2==0?empty.push(arr[i]):""
// }
//using Array.prototype.filter()
empty=arr.filter(elem=>elem%2==0)
console.log(empty==comparision)


//Array.prototype.map() example
let mapUse=arr.map(elem=>elem**2)
console.log(mapUse)