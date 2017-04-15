var TST = function () {
	this.root = null;
}

var Node = function (char) {
	this.char = char;
	this.isEndOfString = false;
	this.left = null;
	this.eq = null;
	this.right = null;
}

TST.prototype = {
	addString : function (str) {
		if (!str || str.length < 1) {
			return;
		}
		if (!this.root) {
			this.root = new Node (str[0]);
		}
		addStringUtil (this.root, str);
	},

	printStrings : function () {
		if (!this.root) {
			return;
		}
		var str = "";
		printStringsUtil (this.root, str);
	},

	deleteString : function (str) {
		if (!this.root || !str || str.length < 1) {
			return;			
		}
		deleteStringUtil (this.root, str);
	},

	ifStringExist : function (str) {
		if (!this.root || !str || str.length < 1) {
			return false;
		}
		return ifStringExistUtil (this.root, str);
	}
};

var addStringUtil = function (node, str) {
	if (getAsciiValue (str[0]) == getAsciiValue (node.char)) {
		if (str.length == 1) {
			node.isEndOfString = true;
			return;
		} else if (!node.eq) {
			node.eq = new Node (str[1]);
		}
		addStringUtil (node.eq, str.substring (1, str.length));
	} else if (getAsciiValue (str[0]) < getAsciiValue (node.char)) {
		if (!node.left) {
			node.left = new Node (str[0]);
		}
		addStringUtil (node.left, str);
	} else {
		if (!node.right) {
			node.right = new Node (str[0]);
		}
		addStringUtil (node.right, str);
	}
}

var getAsciiValue = function (char) {
	char = char.toLowerCase ();
	return char.charCodeAt (0);
}

var printStringsUtil = function (node, str) {	
	if (node.isEndOfString) {
		console.log (str + node.char);
	}
	if (node.eq) {
		var newStr = str + node.char;
		printStringsUtil (node.eq, newStr);
	}
	if (node.left) {
		printStringsUtil (node.left, str);
	}
	if (node.right) {
		printStringsUtil (node.right, str);
	}
}

var deleteStringUtil = function (node, str) {
	if (!node || !str || str.length < 1) {
		return;
	}
	if (getAsciiValue (str[0]) == getAsciiValue (node.char) && str.length == 1 && node.isEndOfString) {
		node.isEndOfString = false;
	}
	if (node.eq && getAsciiValue (str[0]) == getAsciiValue (node.char)) {
		deleteStringUtil (node.eq, str.substring (1, str.length));
	} else if (node.left && getAsciiValue (str[0]) < getAsciiValue (node.char)) {
		deleteStringUtil (node.left, str);
	} else if (node.right && getAsciiValue (str[0]) > getAsciiValue (node.char)) {
		deleteStringUtil (node.right, str);
	}
	if (node.eq && isEmptyObj (node.eq)) {
		delete node.eq;
	} else if (node.left && isEmptyObj (node.left)) {
		delete node.left;
	} else if (node.right && isEmptyObj (node.right)) {
		delete node.right;
	}	
	if (!node.left && !node.right && !node.eq) {
		deleteObj (node);
	}	
}

var isEmptyObj = function (node) {
	for (var key in node) {
		return false;
	}
	return true;
}

var deleteObj = function (node) {
	delete node.char;
	delete node.isEndOfString;
	delete node.left;
	delete node.eq;
	delete node.right;
}

var ifStringExistUtil = function (node, str) {
	if (!str || str.length < 1 || !node) {
		return false;
	}
	if (getAsciiValue (str[0]) == getAsciiValue (node.char) && str.length == 1 && node.isEndOfString) {
		return true;
	}
	if (node.eq && getAsciiValue (str[0]) == getAsciiValue (node.char)) {
		return ifStringExistUtil (node.eq, str.substring (1, str.length));
	}
	if (node.left && getAsciiValue (str[0]) < getAsciiValue (node.char)) {
		return ifStringExistUtil (node.left, str);
	}
	if (node.right && getAsciiValue (str[0]) > getAsciiValue (node.char)) {
		return ifStringExistUtil (node.right, str);
	}
	return false;
}

var myTST = new TST();
console.log ("\n<-- Printing String -->");
myTST.printStrings();
myTST.addString ("Tarun");
myTST.addString ("aTarun");
myTST.addString ("rahul");
myTST.addString ("Tapan");
console.log ("\n<-- Printing String -->");
myTST.printStrings();
console.log ("\n<-- Check if String exist -->");
console.log (myTST.ifStringExist ("Tapan"));
//myTST.deleteString ("Tapan");
myTST.deleteString ("Tapan");
console.log ("\n<-- Printing String -->");
myTST.printStrings();
myTST.addString ("Tapan");
console.log ("\n<-- Printing String -->");
myTST.printStrings();