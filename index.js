class Telephone {
  constructor() {
    this.phoneNumbers = new Set();
    this.observers = [];
  }

  addPhoneNumber(phoneNumber) {
    this.phoneNumbers.add(phoneNumber);
  }

  removePhoneNumber(phoneNumber) {
    this.phoneNumbers.delete(phoneNumber);
  }

  dialPhoneNumber(phoneNumber) {
    if (this.phoneNumbers.has(phoneNumber)) {
      this.notifyObservers(phoneNumber);
    }
  }

  addObserver(observer) {
    this.observers.push(observer);
  }

  removeObserver(observer) {
    this.observers = this.observers.filter((obs) => obs !== observer);
  }

  notifyObservers(phoneNumber) {
    this.observers.forEach((observer) => observer.notify(phoneNumber));
  }
}

class Observer {
  notify(phoneNumber) {
    // Base class method, should be overridden by subclasses
  }
}

class PrintPhoneNumberObserver extends Observer {
  notify(phoneNumber) {
    console.log(`Phone number: ${phoneNumber}`);
  }
}

class PrintDialingObserver extends Observer {
  notify(phoneNumber) {
    console.log(`Now dialing: ${phoneNumber}`);
  }
}

// Usage
const telephone = new Telephone();
telephone.addObserver(new PrintPhoneNumberObserver());
telephone.addObserver(new PrintDialingObserver());

telephone.addPhoneNumber("1234567890");
telephone.addPhoneNumber("2345678901");

telephone.dialPhoneNumber("1234567890");
telephone.dialPhoneNumber("2345678901");
telephone.dialPhoneNumber("3456789012"); // This should not notify observers since the number is not added