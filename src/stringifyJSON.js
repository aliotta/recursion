// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
	var output = null;
  while (true){
	  if(typeof obj === "undefined" || typeof obj==="symbol"){ 
	  } else if (typeof obj === "object" && Array.isArray(obj) === false){
		  var numKeys = Object.keys(obj).length;
		  var count = 1;
		  var objectString = "\{";
		  for (key in obj){
			  objectString = objectString.concat(stringifyJSON(key)).concat("\:").concat(stringifyJSON(obj[key]));
			  if(count != numKeys){
				  objectString = objectString.concat("\,");
			  }
			  count += 1;
		  }
		  return objectString.concat("\}")
	  } else if (typeof obj === "object" && Array.isArray(obj) === true){
		  var arrayString = "\[";
		  for (var i = 0; i < obj.length; i++){
			  arrayString = arrayString.concat(stringifyJSON(obj[i]));
			  if (i != obj.length -1){
				  arrayString = arrayString.concat("\,");
			  }
		  }
		  return arrayString.concat("\]")
	  }
	  else if (typeof obj === "string"){
		  return "".concat("\"" + obj + "\"");
	  } else {
		  return "".concat(obj)
	  }
  }
  return output;
};
