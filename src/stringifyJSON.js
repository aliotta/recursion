// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
	var output = null;
  while (true){
	  if(typeof obj === "undefined" || typeof obj==="symbol"){ 
	  } else if (typeof obj === "object"){
		  var objectString = "\{";
		  for (key in obj){
			  objectString = objectString.concat(stringifyJSON(key)).concat("\:").concat(stringifyJSON(obj[key]));
		  }
		  return objectString.concat("\}")
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
