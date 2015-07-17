// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
	var output = [];
	var startNode = document.body
	function recursiveSearch(className){
		var children = this.childNodes;
		for (var i=0; i < children.length; i++){
			var classes = children[i].classList;
			if (classes !== undefined && classes.contains(className) === true){
				output.push(children[i]);
			}
			recursiveSearch.call(children[i],className);
		}
	}
	recursiveSearch.call(startNode, className);
	return output;
};