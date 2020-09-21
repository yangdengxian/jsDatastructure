/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
	//左右序列号值
	var left = 0,
		right = 0,
		len = s.length;
	var bolArray = [];
	if (!len) return '';
	for (var i = len - 2; i >= 0; i--) {
		bolArray[i] = [];
		for (var j = i + 1; j < len; j++) {
			bolArray[i][j] = s.charAt(i) == s.charAt(j) && (j - i < 3 || bolArray[i + 1][j - 1]); //小于3是因为aba一定是回文
			if (!bolArray[i][j] || right - left >= j - i) continue;
			left = i;
			right = j;
		}
	}
	return s.substring(left, right + 1);
};

longestPalindrome('abaa');
