function geti(s) {
	return document.getElementById(s);
}

function Debugger(elem, colours) {
	this.elem = elem;
	this.colours = ["#FF8888", "#8888FF"];
	if(colours) {
		this.colours = colours;
	}
	
	
	this.clear = function() {
		this.elem.innerHTML = "";
	}
	this.line = function(s, type) {
		if(type) {
			this.addType(type);
		}
		this.elem.innerHTML += s + "<br>";
	}
	this.cline = function(s, type) {
		this.clear();
		if(type) {
			this.addType(type);
		}
		this.elem.innerHTML += s + "<br>";
	}
	this.write = function(s, type) {
		if(type) {
			this.addType(type);
		}
		this.elem.innerHTML += s;
	}
	this.cwrite = function(s, type) {
		this.clear();
		if(type) {
			this.addType(type);
		}
		this.elem.innerHTML += s;
	}
	this.addType = function(t) {
		if(t === "log") {
			this.elem.innerHTML += "<span style='color: " + this.colours[0] + ";'>LOG</span>";
		} else if(t === "error") {
			this.elem.innerHTML += "<span style='color: " + this.colours[1] + ";'>LOG</span>";
		}
	}
}
