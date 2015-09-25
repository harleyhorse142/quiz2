'use strict';

function arraySum(arr) {
	var sum = 0;
	if (typeof arr === "number"){
		sum += arr;
	} else if (Array.isArray(arr)) {
		for (var i =0; i<arr.length; i++){
			sum += arraySum(arr[i])
		}
	}
	return sum;
}

module.exports = arraySum;



