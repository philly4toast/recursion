// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
//early returns
  if (typeof obj === 'boolean' || typeof obj === 'number' || obj === null){
    return ''+ obj;
    //why the double quotation here when there is no space? 
  // checkstrings
  }else if (typeof obj === 'string'){
    return '"' + obj + '"';
  //check array
  }else if (Array.isArray(obj)){
    var results = [];
    if (obj.length === 0){
      return '[' + results + ']';
    }
    obj.forEach(function(item){
      results.push(stringifyJSON(item));
    })
    return '[' + results + ']';
  //check object
  }else{
    var results = [];
    for (var key in obj){
      if (obj[key] === undefined || typeof obj[key] === 'function'){
        continue;
      }
       results.push(stringifyJSON(key) + ':' + stringifyJSON(obj[key]));
    }
   return '{' + results + '}';
  }  
};
