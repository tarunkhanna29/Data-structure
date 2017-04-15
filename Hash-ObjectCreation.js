var Hash = require ("./Hash");

var myHash = new Hash.Hash();
myHash.addKeyValue ("a", 1);
myHash.addKeyValue ("b", 2);
myHash.addKeyValue ("c", 3);
myHash.removeKey ("a");
console.log (myHash);
myHash.parseAllKeys ();