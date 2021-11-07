// Repeat a String Repeat a String
// Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number. For the purpose of this challenge, do not use the built-in .repeat() method.
function repeatStringNumTimes(str,num){
    let returnStr=""
    if(num<=0){
        returnStr;
    }
    for(let i=0;i<num;i++){
        returnStr+=str
    }
    return returnStr;
}
console.log(repeatStringNumTimes("abc",3))
console.log(repeatStringNumTimes("?*",6))
console.log(repeatStringNumTimes("vicky",0))