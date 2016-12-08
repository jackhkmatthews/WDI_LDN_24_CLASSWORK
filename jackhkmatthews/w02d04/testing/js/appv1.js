var car = 'skoda';

describe('these are the specs for a car object', function(){
  it('should exist', function(){
    expect(!!car).toBe(true);
  });
});

function describe(description, callback){
  console.log(description);
  callback();
}

function it(description, callback){
  console.log(description);
  callback();
}

function expect(object){
  return {
    toBe: function(condition){
      return console.log(object === condition);
    }
  };
}
