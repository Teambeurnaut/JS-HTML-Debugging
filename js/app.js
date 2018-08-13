function geti(s) {
	return document.getElementById(s);
}

function Debugger(elem) {
	this.elem = elem;
	this.clear = function() {
		this.elem.innerHTML = "";
	}
	this.line = function(s) {
		this.elem.innerHTML += s + "<br>";
	}
	this.cline = function(s) {
		this.elem.innerHTML = s + "<br>";
	}
	this.write = function(s) {
		this.elem.innerHTML += s;
	}
	this.cwrite = function(s) {
		this.elem.innerHTML = s;
	}
}
