function Thermostat() {
  this.defaultTemp = 20;
  this.currentTemp = this.defaultTemp;
  this.minTemp = 10;
  this.maxTemp = 25;


  Thermostat.prototype.increaseTemp = function(number){
    this.currentTemp += number;
  };
  Thermostat.prototype.decreaseTemp = function(number){
    if(this.currentTemp - number <= this.minTemp) {
    throw new Error('too cold');
    }
    this.currentTemp -= number;
  };
  Thermostat.prototype.powerSavingOn = function(){
    this.maxTemp = 25;
  };
  Thermostat.prototype.powerSavingOff = function(){
    this.maxTemp = 32;
  };
  Thermostat.prototype.reset = function(){
    this.currentTemp =20;
  };
  Thermostat.prototype.colour = function(){
    if (this.currentTemp < 18){
      return 'green';
    }
    if (this.currentTemp < 25){
      return 'yellow';
    }
    if  (this.currentTemp >= 25){
      return 'red';
    }
  };
}
