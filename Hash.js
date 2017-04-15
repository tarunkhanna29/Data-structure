var Hash = function() {
	this.hashObj = {};
}

Hash.prototype.addKeyValue = function (key, val) {
	this.hashObj[key] = val;
}

Hash.prototype.removeKey = function (key) {
	delete this.hashObj[key];
}

Hash.prototype.parseAllKeys = function () {
	for (var key in this.hashObj) {
		console.log ("Key " + key + " Value " + this.hashObj[key]);
	}
}

module.exports.Hash = Hash;