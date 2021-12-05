// Sum All Numbers in a Range
// For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.
function sumAll(arr) {
    //sort array
    arr=arr.sort(function(a,b){return a-b})
    // console.log(arr)
    //iterate over for getting new array with numbers in between them
    let populatedArray=[]
    for(let i=arr[0];i<=arr[1];i++){
        populatedArray.push(i)
    }
    // console.log(populatedArray)
    //using array reduce to sum up
    const reducer = (previousValue, currentValue) => previousValue + currentValue;
  
    return populatedArray.reduce(reducer);
  }
  
  sumAll([9,1]);