// Understand Functional Programming Terminology
// Functions that can be assigned to a variable, passed into another function, or returned from another function just like any other normal value, are called first class functions. In JavaScript, all functions are first class functions.

// The functions that take a function as an argument, or return a function as a return value are called higher order functions.

// When functions are passed in to or returned from another function, then those functions which were passed in or returned can be called a lambda.

//Function that returns a string representing a cup of green tea
const prepareGreenTea=()=>'greenTea'
//Function that returns a string representing a cup of black tea
const prepareBlackTea=()=>'blackTea'

const getTea = (prepareTea, numOfCups) => {
    const teaCups = [];
  
    for(let cups = 1; cups <= numOfCups; cups += 1) {
      const teaCup = prepareTea();
      teaCups.push(teaCup);
    }
    return teaCups;
  };
  
  // Only change code below this line
  const tea4GreenTeamFCC = getTea(prepareGreenTea,27);
  const tea4BlackTeamFCC = getTea(prepareBlackTea,13);
  // Only change code above this line
  
  console.log(
    tea4GreenTeamFCC,
    tea4BlackTeamFCC
  );