// Diff Two Arrays
// Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

//Shamelessly copied from freecode camp hints
function diffArray(arr1,arr2){
    const newArr=[]
    function onlyInFirst(first,second){
        //Looping through an array to find elements that don't exist in another array
        for(let i=0;i<first.length;i++){
            if(second.indexOf(first[i])===-1){
                newArr.push(first[i])
            }
        }
    }
    onlyInFirst(arr1,arr2)
    onlyInFirst(arr2,arr1)
    console.log(newArr)
    return newArr

}
diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);