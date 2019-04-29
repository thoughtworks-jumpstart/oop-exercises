const Rank = require("./Rank");

const _rank = new WeakMap();
const _caller = new WeakMap();
const _callHandler = new WeakMap();

class Call {
  constructor(caller) {
    _rank.set(this, Rank.Agent);
    _caller.set(this.caller);
  }

  setHandler(employee) {
    _callHandler.set(this, employee);
  }

  getRank() {
    return _rank.get(this);
  }

  setRank(newRank) {
    _rank.set(this, newRank);
  }

  incrementRank() {}

  disconnect() {}
}
