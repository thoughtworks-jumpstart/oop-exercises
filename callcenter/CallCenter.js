const Rank = require("./Rank");

// const LEVELS = 3;
const NO_OF_AGENTS = 10;
const NO_OF_TEAMLEADS = 4;
const NO_OF_MANAGERS = 2;

class CallCenter {
  constructor() {
    this.callQueues = {
      [Rank.Agent]: [],
      [Rank.TeamLeader]: [],
      [Rank.Manager]: []
    };

    this.employees = {
      [Rank.Agent]: [],
      [Rank.TeamLeader]: [],
      [Rank.Manager]: []
    };
  }

  //get the first avaliable employee
  getHandlerForCall(call) {
    return this.employees[call.getRank()].find(employee => employee.isFree());
  }

  //create call and try to dispatch to employee
  createCall(caller) {
    const call = new Call(caller);
    dispatchCall(call);
  }

  //route call to avaliable employee or to queue if noone is avaliable
  dispatchCall(call) {
    //route to employee of rank stated in call
    const employee = getHandlerForCall(call);

    if (employee) {
      employee.receiveCall(call);
      call.setHandler = employee;
    } else {
      //place call in queue
      this.callQueues[call.getRank()].push(call);
    }
  }
}

module.exports = CallHandler;
