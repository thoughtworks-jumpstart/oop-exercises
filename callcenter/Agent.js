const Employee = require("./Employee");
const Rank = require("./Rank");

const _rank = new WeakMap();

class Agent extends Employee {
  constructor() {
    super();
    this.rank = Rank.Agent;
    _rank.set(this, Rank.Agent);
  }

  getRank() {
    return _rank.get(this);
  }
}

module.exports = Agent;
