// this syntax (seperate variables with comma and remove the following var
//is common when you have more than one variable being declared at a time

var Car = require('../src/car.js'),
expect = require('chai').expect;

describe('Car', function(){
var myCar;
  beforeEach(function(){
    myCar = new Car("toyota", "corolla", "blue")
  });

  describe('#year', function(){
    //think about using the new Date() and getFullYear functions
    it('should be the current year', function(){
      expect(myCar.year).to.equal(2014);
    });
  });

  describe('#state', function(){
    it('should initially be off', function(){
      expect(myCar.state).to.equal("off");
    });
  });

  describe('#previousOwners', function(){
    it('should initially be empty', function(){
      expect(myCar.previous_owners).to.be.empty;
    });
  });

  describe('#curretOwner', function(){
    it('should initially be manufacturer', function(){
      expect(myCar.current_owner).to.equal("manufacturer")
    });
  });

  describe('#passengers', function(){
    it('should initially be empty', function(){
      expect(myCar.passengers).to.be.empty;
      expect(myCar.passengers.length).to.equal(0);
    });
  });

  describe('#sale', function(){

    it('should move currentOwner to previousOwners array', function(){
      myCar.sale("Elie");
      expect(myCar.previous_owners[0]).to.equal("manufacturer")
    });

    it('should update currentOwner with the new owner', function(){
      myCar.sale("Elie");
      expect(myCar.current_owner).to.equal("Elie");
    });
  });

  describe('#paint', function(){
    it('should update the color of myCar', function(){
      myCar.paint("black");
      expect(myCar.color).to.equal("black");
    });
  });

  describe('#start', function(){
    it('should update the state to on', function(){
      myCar.start()
      expect(myCar.state).to.equal("on")
    });
  });

  describe('#off', function(){
    it('should update the state to off', function(){
      myCar.off()
      expect(myCar.state).to.equal("off")
    });
  });

  describe('#park', function(){
    it('should make sure to only work when the car is off', function(){
      myCar.off()
      expect(myCar.park()).to.equal("parked!")
    });

  });

  describe('#pickUp', function(){
    it('should add the passenger to the passengers array if car is on', function(){
      myCar.start();
      myCar.pickUp("Matt");
      expect(myCar.passengers.length).to.equal(1);
    });

    it('should not modify the passengers array if car is off', function(){
      myCar.off();
      myCar.pickUp("Elie");
      expect(myCar.passengers.length).to.equal(0);
    });
  });

  describe('#dropOff', function(){
    it('should remove passenger from the passengers array if car is on', function(){
      myCar.start()
      myCar.pickUp("Matt");
      myCar.dropOff("Matt");
      expect(myCar.passengers.length).to.equal(0);
    });

    it('should leave passenger in the passengers array if car is off', function(){
      myCar.start();
      myCar.pickUp("Matt");
      myCar.off();
      myCar.dropOff("Matt");
      expect(myCar.passengers.length).to.equal(1);
    });
  });

});


