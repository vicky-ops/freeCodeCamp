// Convert Celsius to FahrenheitPassed
// The algorithm to convert from 
// to Fahrenheit is the temperature in Celsius times 9/5, plus 32.
function converToF(celsius){
    let fahrenheit;
    fahrenheit=(celsius*9/5)+32
    return fahrenheit;
}

console.log(converToF(30))