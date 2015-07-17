// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
    
	function isFunction(functionToCheck) {
		var getType = {};
		return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
	}
    while (true){
	    if(typeof obj === "undefined" || typeof obj === "symbol"){ 
			return undefined
	    } else if (obj === null){
			return "null"
		} else if (typeof obj === "object" && Array.isArray(obj) === false){
		    var numKeys = Object.keys(obj).length;
		    var count = 1;
		    var objectString = "\{";
		    for (key in obj){
			    if(obj[key] !== undefined && isFunction(obj[key]) !== true && typeof obj[key] !== "symbol"){
				    objectString = objectString.concat(stringifyJSON(key)).concat("\:").concat(stringifyJSON(obj[key]));
				    if(count != numKeys){
					    objectString = objectString.concat("\,");
			   	    }
				    count += 1;
			    }
		    }
		    return objectString.concat("\}")
	    } else if (typeof obj === "object" && Array.isArray(obj) === true){
		    var arrayString = "\[";
		    for (var i = 0; i < obj.length; i++){
				if (typeof obj[i] === "symbol"){
					arrayString = arrayString.concat(null);
				} else {
					arrayString = arrayString.concat(stringifyJSON(obj[i]));
				}	
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
    
};