var liObjs = document.getElementById("list").getElementsByTagName("li");
for(var i = 0; i < liObjs.length; i++) {
    var aObj = liObjs[i].firstElementChild;
    aObj.onclick = function() {
		for(var j = 0; j < liObjs.length; j++) {
			liObjs[j].removeAttribute("class");
		}
    this.parentNode.className = "list1";
	};
}
