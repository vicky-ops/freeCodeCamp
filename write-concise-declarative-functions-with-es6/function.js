// Write Concise Declarative Functions with ES6
// When defining functions within objects in ES5, we have to use the keyword function as follows:

// Refactor the function setGear inside the object bicycle to use the shorthand syntax described above.
// Only change code below this line
const bicycle = {
    gear: 2,
    setGear (newGear) {
      this.gear = newGear;
    }
  };
  // Only change code above this line
  bicycle.setGear(3);
  console.log(bicycle.gear);
  
  //Old Way
  // const animal={
  //   limb:4,
  //   canTalk:function(sound="meow"){
  //     this.makeSound=sound;
  //   }
  // }
  // //ES6 Way
  // const animal={
  //   limb:4,
  //   calTalk(sound="meow"){
  //     this.makeSound=sound;
  //   }
  // }
