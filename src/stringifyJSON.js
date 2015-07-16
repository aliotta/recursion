// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
	var output = "";
  while (true){
	  if(typeof obj === "undefined" || typeof obj==="symbol"){
		  
	  } else if (typeof obj === "object"){
		  
	  } else if (typeof obj === "array"){
		  
	  }
	  else if (typeof obj === "string"){
		  return "".concat("'" + obj + "'");
	  } else {
		  return "".concat(obj)
	  }
  }
  return output;
};
