var toBinary = function (x) {
	return x.toString (2);
}

var toOcta = function (x) {
	return x.toString (8);
}

var toHexa = function (x) {
	return x.toString (16);
}

var toDecimalFromBinary = function (x) {
	return parseInt (x, 2);
}

var toDecimalFromOcta = function (x) {
	return parseInt (x, 8);
}

var toDecimalFromHexa = function (x) {
	return parseInt (x, 16);
}

var rightShift = function (x) {
	return x >> 1;
}

var leftShift = function (x) {
	return x << 1;
}

var compliment = function (x) {
	return ~x >>> 0;
}

var TwoCompliment = function (x) {
	return ~x + 1;
}

var maskOddBits = function (x) {
	return x & 0x55555555;
}

var maskEvenBits = function (x) {
	return x & 0xaaaaaaaa;
}

var noOfOneBits = function (x) {
	var count = 0;
	while (x > 0) {
		if (x & 1 > 0) {
			count++;
		}
		x = x >> 1;
	}
	return count;
}

var XOR = function (a, b) {
	return a^b;
}

var x=10;
console.log (toBinary (x));
console.log (toOcta (x));
console.log (toHexa (x));
console.log (toDecimalFromBinary (x));
console.log (rightShift (x));
console.log (leftShift (x));
console.log (toBinary (rightShift (toBinary (x))));
console.log (compliment (x));
console.log (toBinary (compliment (x)));
console.log (toBinary (toDecimalFromBinary (toBinary (compliment (x))) + 1));
console.log (TwoCompliment (x));
console.log (toDecimalFromOcta (x));
console.log (toDecimalFromHexa (x));
console.log (maskOddBits (x));
console.log (maskEvenBits (x));
console.log (noOfOneBits (x));
var x = 6;
var y = 7;
console.log (XOR (x, y));
var z = 6;
console.log (XOR (x, z));
