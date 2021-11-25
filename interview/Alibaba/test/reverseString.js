/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    var len = s.length;
    var left = 0;
    var right = len - 1;
    while (left < right) {
        swip(s,left++,right--);
    }
};

function swip(s,i,j) {
    var temp = s[i];
    s[i] = s[j];
    s[j] = temp;
}

reverseString(["h","e","l","l","o"])