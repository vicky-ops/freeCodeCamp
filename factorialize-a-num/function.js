/*Factorialize a Number
Return the factorial of the provided integer.*/

// Algorith for Finding Factorial of a Number
// Step 1: Start
// Step 2: Declare Variable n, fact, i
// Step 3: Read number from User
// Step 4: Initialize Variable fact=1 and i=1
// Step 5: Repeat Until i<=number
//             5.1 fact=fact*i
//             5.2 i=i+1
// Step 6: Print fact
// Step 7: Stop

function factorialize(num){
    let fact;
    fact=1;
    for(i=1;i<=num;i++){
        fact=fact*i
    }

    return fact
}
console.log(factorialize(5))//120
