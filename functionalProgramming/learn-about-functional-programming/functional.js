// Learn About Functional Programming
// Functional programming is a style of programming where solutions are simple, isolated functions, without any side effects outside of the function scope: INPUT -> PROCESS -> OUTPUT
// The members of freeCodeCamp happen to love tea.
// In the code editor, the prepareTea and getTea functions are already defined for you. Call the getTea function to get 40 cups of tea for the team, and store them in the tea4TeamFCC variable.

//Functions that returns a string representing a cup of green tea
const prepareTea=()=>'greenTea'
// console.log(prepareTea())
const getTea = (numOfCups) => {
    const teaCups = [];
  
    for(let cups = 1; cups <= numOfCups; cups += 1) {
      const teaCup = prepareTea();
      teaCups.push(teaCup);
    }
    return teaCups;
  };

const tea4TeamFCC=getTea(40);
console.log(tea4TeamFCC)