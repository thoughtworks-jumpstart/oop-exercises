//defining an Animal class
const _formatName = new WeakMap();
const _name = new WeakMap();

class Animal {
  constructor(name) {
    _name.set(this, name);
    _formatName.set(this, () => {
      return `A Fierce ${_name.get(this)}`;
    });
  }
  get name() {
    return _formatName.get(this)();
  }
}

// creating an instance of the class
const animal1 = new Animal("tiger");
console.log(animal1.name); //’A Fierce tiger’
