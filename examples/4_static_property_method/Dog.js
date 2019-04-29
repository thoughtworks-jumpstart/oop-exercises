const Animal = require("./Animal");

class Dog extends Animal {
  constructor(name) {
    // call the Animal constructor
    super(name, 4, "woof");
    this.type = "dog";

    // update count of Dog objects
    Dog.count++;
  }

  // override Animal.speak
  speak(to) {
    super.speak();
    if (to) console.log(`to ${to}`);
  }

  // return number of dog objects
  static get COUNT() {
    return Dog.count;
  }
}

// static property (added after class is defined)
Dog.count = 0;

console.log(`Dogs defined: ${Dog.COUNT}`); // Dogs defined: 0

const don = new Dog("Don");

console.log(`Dogs defined: ${Dog.COUNT}`); // Dogs defined: 1

const kim = new Dog("Kim");

console.log(`Dogs defined: ${Dog.COUNT}`); // Dogs defined: 2
