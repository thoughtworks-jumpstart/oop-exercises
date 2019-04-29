const Employee = require("./Employee");
const Rank = require("./Rank");

const _rank = new WeakMap();

class TeamLead extends Employee {
  constructor() {
    super();
    _rank.set(this, Rank.TeamLead);
  }

  getRank() {
    return _rank.get(this);
  }
}

module.exports = TeamLead;
