// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  let result = '';
  let addToString = function(thing) {
    if ( typeof thing === 'number' ) {
      result += `${thing}`;
    } else if ( typeof thing === null ) {
      result += 'null';
    } else if ( typeof thing === 'boolean' ) {
      result += `${thing}`;
    } else if ( typeof thing === 'string' ) {
      result += `"${thing}"`;
    } else if (Array.isArray(thing)) {
      result += '[' + thing.map(element => addToString(element)) + ']';
    }
  };
};
