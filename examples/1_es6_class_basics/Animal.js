class Animal {
  constructor(name = "anonymous", legs = 4, noise = "nothing") {
    this.type = "animal";
    this.name = name;
    this.legs = legs;
    this.noise = noise;
  }

  speak() {
    console.log(`${this.name} says "${this.noise}"`);
  }

  walk() {
    console.log(`${this.name} walks on ${this.legs} legs`);
  }
}

const rex = new Animal("Rex", 4, "woof");
rex.speak(); // Rex says "woof"
rex.noise = "growl";
rex.speak(); // Rex says "growl"
