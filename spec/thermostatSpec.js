describe('Thermostat', function(){

  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  });
  describe('default settings', function(){
    it('it starts at 20 degrees', function(){
      expect(thermostat.defaultTemp).toEqual(20);
    });
    it('has a minimum temp of 10', function(){
      expect(thermostat.minTemp).toEqual(10);
    });
  });
  describe('buttons', function(){
    it('has up button to increase the temp', function(){
      thermostat.increaseTemp(5);
      expect(thermostat.currentTemp).toEqual(25);
    });
    it('has down button to decrease the temp', function(){
      thermostat.decreaseTemp(5);
      expect(thermostat.currentTemp).toEqual(15);
    });
  });
  describe('it raises an error when attempt to go below min', function(){
    it('raises an error', function(){
      expect(function(){thermostat.decreaseTemp(15);}).toThrowError('too cold');
    });
  });
  describe('power saving mode', function(){
    it('when on keeps the temp max at 25 degrees', function(){
      thermostat.powerSavingOn();
      expect(thermostat.maxTemp).toEqual(25);
    });
    it('when off keeps the temp max at 32 degrees', function(){
      thermostat.powerSavingOff();
      expect(thermostat.maxTemp).toEqual(32);
    });
   });
   describe('reset button', function(){
     it('sets the temperature to 20 degrees', function(){
       thermostat.reset();
       expect(thermostat.currentTemp).toEqual(20);
     });
   });
   describe('collor button', function(){
     it('that is green when temp is less than 18', function(){
       thermostat.decreaseTemp(5);
       expect(thermostat.colour()).toBe('green');
     });

     it('that is yellow when temp is less than 25', function(){
       expect(thermostat.colour()).toBe('yellow');
     });

     it('that is red when temp is more than 25', function(){
       thermostat.increaseTemp(10);
       expect(thermostat.colour()).toBe('red');
     });
   });
});
