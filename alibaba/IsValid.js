/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    var regex = /^\(\)$|^\[\]$|^\{\$}/;
    return regex.test(s)
};

var isTrue = isValid("{[]}")