// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  let result = '';
  let addToString = function(thing) {
    if ( typeof thing === 'number' ) {
      result += `${thing}`;
    } else if ( thing === null ) {
      result += 'null';
    } else if ( typeof thing === 'boolean' ) {
      result += `${thing}`;
    } else if ( typeof thing === 'string' ) {
      result += `"${thing}"`;
    } else if ( typeof thing === 'function' ) {

    } else if ( thing === undefined) {

    } else if (Array.isArray(thing)) {
      result += '[';
      for (var i = 0; i < thing.length; i++) {
        addToString(thing[i]);
        if (i !== thing.length - 1) {
          result += ',';
        }
      }
      result += ']';
    } else if (typeof thing === 'object') {
      let objectKeys = Object.keys(thing).length;
      let i = 0;
      result += '{';
      for (var key in thing) {
        if (typeof thing[key] !== 'undefined' &&
          typeof thing[key] !== 'function') {
          result += `"${key}"` + ':';
          addToString(thing[key]);
          if (i !== objectKeys - 1) {
            result += ',';
          }
          i++;
        }
      }
      result += '}';
    }
  };
  addToString(obj);
  return result;
};


