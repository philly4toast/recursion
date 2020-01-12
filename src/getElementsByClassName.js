// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
// your code here
	var results = [];
	function searchElementForClassName(element){
			//if some element contains className and exists
		if (element.classList && element.classList.contains(className)){
			//add it to the results
			results.push(element);
		}
			//add recursively to chec
			//if that element has child nodes and the elements within there contain className
		if (element.childNodes){
			element.childNodes.forEach(function(item){
				searchElementForClassName(item);
			})
		}
	}	
			//call upon our document.body
	searchElementForClassName(document.body);	
			//return results
	return results;
  
};
