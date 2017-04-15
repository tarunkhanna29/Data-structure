var myArray0 = [];
myArray0.pop();		//Empty array doesn't break on poping the element.
myArray0.pop();	
myArray0.pop();	
console.log (myArray0);

var myArray = [1, 2, 3, 4, "5"];
console.log ("1) " + myArray.pop());
console.log ("2) " + myArray.pop());
console.log ("3) " + myArray.pop());
console.log ("4) " + myArray.push(7));
console.log ("5) " + myArray);
//console.log ("6) " + myArray.pop());
console.log ("6) " + myArray.indexOf(2));
console.log ("7) " + myArray.indexOf("2"));
console.log ("8) " + myArray.indexOf(22));
console.log ("9) " + myArray.indexOf(7));
console.log ("10) " + myArray.indexOf("7"));
console.log ("11) " + myArray.reduce (function(myVar1, myVar2) {
	return myVar1 + myVar2;
}));