// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
	var output = [];
	var startNode = document.body;

	if (startNode.classList.contains(className)){//Check if body has class name
		output.push(startNode);
	}

	function recursiveSearch(className){
		var children = this.childNodes;
		for (var i=0; i < children.length; i++){
			var classes = children[i].classList;
			if (classes !== undefined && classes.contains(className) === true){ //had to use contains here b/c its a nodelist
				output.push(children[i]);
			}
			recursiveSearch.call(children[i],className); //recursive call to elements nested deeper
		}
	}
	recursiveSearch.call(startNode, className); //initiating call to recursive function
	return output;
};