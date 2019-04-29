const Employee = require("./Employee");
const Rank = require("./Rank");

const _rank = new WeakMap();

class Manager extends Employee {
  constructor() {
    super();
    _rank.set(this, Rank.Manager);
  }

  getRank() {
    return _rank.get(this);
  }
}

module.exports = Manager;
