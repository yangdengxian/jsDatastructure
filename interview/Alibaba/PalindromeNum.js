/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
	var n = 0,
		newNum = x;
	if (x < 0) return false;
	while (newNum != 0) {
		n = n * 10 + (newNum % 10);
		newNum = newNum / 10;
	}
	return n === x;
};

isPalindrome(121);
