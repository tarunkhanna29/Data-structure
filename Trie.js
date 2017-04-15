var Trie = function () {
	this.root = null;
}

var Node = function (data) {
	this.data = data;
	this.isEndOfString = false;
	this.characters = {};
}

Trie.prototype = {
	addString : function (str) {
		if (!str || str.length < 1) return;
		if (!this.root) {
			this.root = new Node ("");
		}
		addStringUtil (this.root, str);
	},

	IsStringExist : function (str) {
		if (!this.root) {
			return false;
		}
		if (!str || str.length < 1) {
			return false;
		}
		return IsStringExistUtil (this.root, str);		
	},

	deleteString : function (str) {
		if (!str || str.length < 1) {
			return;
		}
		if (!this.root) {
			return;
		}
		deleteStringUtil (this.root, str);		
	},

	printStrings : function () {
		if (!this.root) return;
		printStringsUtil (this.root, "");		
	}
}

var addStringUtil = function (node, str) {
	if (str.length < 1) {
		return;
	}
	if (node.characters[str[0]]) {
		addStringUtil (node.characters[str[0]], str.substring (1, str.length));
	} else {
		var myNode = new Node (str[0]);
		node.characters[str[0]] = myNode;		
	}
	if (str.length == 1) {
		node.characters[str[0]].isEndOfString = true;
	} else {
		addStringUtil (node.characters[str[0]], str.substring (1, str.length));
	}
}

var IsStringExistUtil = function (node, str) {
	if (!node || !node.characters[str[0]] || str.length < 1) {
		return false;
	}
	if (str.length == 1 && node.characters[str[0]] && node.characters[str[0]].isEndOfString == true) {
		return true;
	}	
	return IsStringExistUtil (node.characters[str[0]], str.substring (1, str.length));
}

var deleteStringUtil = function (node, str) {
	if ((str.length == 1) && node.characters[str[0]] && (node.characters[str[0]].isEndOfString)) {
		node.characters[str[0]].isEndOfString = false;		
	}
	else if (node.characters[str[0]]) {
		deleteStringUtil (node.characters[str[0]], str.substring (1, str.length));
	}
	if (node.characters[str[0]] && isEmptyObject (node.characters[str[0]].characters) && node.characters[str[0]].isEndOfString == false) {			
		delete node.characters[str[0]];
	}	
} 

var isEmptyObject = function (obj) {
	for (var key in obj) {
		return false;
	}
	return true;
}

var printStringsUtil = function (node, currStr) {
	for (var key in node.characters) {
		currStr = currStr + node.characters[key].data;
		if (node.characters[key].isEndOfString == true) {
			console.log (currStr);
		}
		printStringsUtil (node.characters[key], currStr);
		if (currStr.length > 0) {
			currStr = currStr.substring (0, currStr.length-1);
		}		
	}	
}

var myTrie = new Trie();
myTrie.addString ("Hello");
myTrie.addString ("Love");
myTrie.addString ("Tarun");
myTrie.addString ("Tar");
myTrie.addString ("Tarpu");
console.log ("\n<-- Printing Strings -->")
myTrie.printStrings ();
console.log ("\n<-- Find if String Exist -->")
console.log (myTrie.IsStringExist ("Taru"));
//myTrie.deleteString ("Tarun");
myTrie.deleteString ("Tarun"); // This fails - This is deleting Tarun
console.log ("\n<-- Printing Strings -->")
myTrie.printStrings ();