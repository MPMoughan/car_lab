function Car(make, model, color){
  this.make = make;
  this.model = model;
  this.color = color;
  this.state = "off";
  this.previous_owner = [];
  this.current_owner = "manufacturer";
  this.passengers = [];
}

Car.prototype.sale = function(newOwner){
  this.previous_owners.push(this.current_owner);
  this.current_owner = newOwner;
};

Car.prototype.paint = function(newColor){
  this.color = newColor;
};

Car.prototype.start = function(){
  this.state = "on";
};

Car.prototype.off = function(){
  this.state = "off";
};

Car.prototype.driveTo = function(destination){
  if(this.state === "on"){
  console.log("driving to " + destination);
  return "driving to " + destination;
  }
};

Car.prototype.park = function() {
  if(this.state === "off"){
    console.log("parked!");
    return "parked!";
  }
};

Car.prototype.pickUp = function(name){
  if(this.state === "on"){
  console.log("driving to pick up " + name);
  this.passengers.push(name);
  }
};

Car.prototype.dropOff = function(name){
  if(this.state === "off" && this.passengers.indexOf(name) !== -1 ){
    this.passengers.splice(this.passengers.indexOf(name),1);
  }
};

module.exports=Car;

// Implement the following methods:

// Car#dropOff it should take a name and remove them from the passengers array,
// but only if they are in the array.
//It should also only drop them off if the car is on.








