// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  let result = '';
  let addToString = function(thing) {
    if ( typeof thing === 'number') {
      result += `${thing}`;
    }
  };
};
