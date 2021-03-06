'use strict';
window.onload = function () {
	console.log('Factorial of 10: ' + factorial(10));
	console.log('Fibonacci of 10: ' + findFibonacci(10));

	var intArray = [];

	for (var i = 0; i < 10; i++) {
		intArray[i]	= Math.floor(Math.random(1,1000)*1000);;
	};

	var sortedArray = Object.create(intArray);
	console.log(intArray);
	console.log(sortedArray);

	console.log('Sort of array: %s  Result: %s', intArray.toString(), quickSort(sortedArray).toString());

	console.time("QS");
	quickSort(intArray);
	console.timeEnd("QS");
};

function factorial (n) {
	return (n-1 === 0) ? n : factorial (n-1) * n;
}

function findFibonacci (number, _preview, _current) {
	var prev = _preview || 0;
	var curr = _current || 1;
	return number-1 === 0 ? prev : findFibonacci(number-1, curr, prev+curr);
}

function quickSort (intArr, _lPoint, _rPoint) {
	var lPoint  = _lPoint || 0;
	var rPoint  = _rPoint || intArr.length - 1;
	var lInd    = lPoint || 0;
	var rInd    = rPoint || intArr.length - 1;
	var baseInd = Math.round((rInd - lInd) / 2 + lInd);
	do {
		// On the left find el-t higher then central
		while (intArr[lInd] < intArr[baseInd]) { lInd++; }
		// On the right find el-t lower then central
		while (intArr[rInd] > intArr[baseInd]) { rInd--; }
		// Then swap it, if nececcery
		if (lInd <= rInd) {
			var tmpEl    = intArr[lInd];
			intArr[lInd] = intArr[rInd];
			intArr[rInd] = tmpEl;
			lInd++; rInd--;
		}
	} while (lInd < rInd);
	// Divide array on two parts, & call recursivly
	if (lPoint < rInd)
		quickSort(intArr, lPoint, rInd);
	if (lInd < rPoint)
		quickSort(intArr, lInd, rPoint);
	return intArr;
}



