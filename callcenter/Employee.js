const _currentCall = new WeakMap();

class Employee {
  constructor(callCenter) {
    _currentCall.set(this, null);
  }

  receiveCall(call) {
    _currentCall.set(this, call);
  }

  callCompleted() {
    _currentCall.set(this, null);
  }

  //escalate the call and assign a new call to this employee
  escalateAndReassign() {
    const call = _currentCall.get(this).incrementRank()
    callCenter.dispatchCall(call)

  }

  isFree() {
    return _currentCall.get(this) === null;
  }

}

module.exports = Employee;
