/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
    var num = 0;
    num = parseInt(str);

    if (isNaN(num)) {
        return 0
    }

    return num > Math.pow(2, 31) - 1 ? Math.pow(2, 31) - 1 : (
        Math.pow(-2, 31) > num ? Math.pow(-2, 31) : num
    )
};

var num = myAtoi("words and 987")