function describe(description, callback){
  console.log(description);
  callback();
}

function it(description, callback){
  console.log(description);
  callback();
}

function expect(object){
  function log(result){
    if (!!result) {
      console.log('%c' + 'pass', 'color:green');
    } else {
      console.log('%c' + 'fail' + 'coloe:red');
    }
  }
  return {
    toBe: function(condition){
      return log(object === condition);
    },
    toBeDefined: function(){
      return log(typeof object !== 'undefined');
    }
  };
}

var car = 'skoda';

describe('these are the specs for a car object', function(){
  it('should exist', function(){
    expect(!!car).toBe(true);
  });
  it('should be defined', function(){
    expect(car).toBeDefined();
  });
});
