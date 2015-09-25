'use strict';

function bindName(firstName, lastName, func) {
	var fullName = firstName + " " + lastName;
	func = func.bind(null, fullName);
	return func;
}

module.exports = bindName;
