const Animal = require("./Animal");

class Dog extends Animal {
  constructor(name) {
    // call the Animal constructor
    super(name, 4, "woof");
    this.type = "dog";
  }

  // override Animal.speak
  speak(to) {
    super.speak();
    if (to) console.log(`to ${to}`);
  }
}

const rex = new Dog("Rex");
rex.speak("everyone"); // Rex says "woof" to everyone

rex.eats = "anything";
console.log(rex.dinner); // Rex eats anything for dinner.
