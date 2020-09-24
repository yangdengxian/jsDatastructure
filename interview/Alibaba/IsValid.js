/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
	while (s.indexOf('()') > -1 || s.indexOf('[]') > -1 || s.indexOf('{}') > -1) {
		s = s.replace('()', '').replace('[]', '').replace('{}', '');
	}
	return s == '';
};

var isTrue = isValid('{[]}');
