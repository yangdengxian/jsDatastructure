/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    var len = s.length;
    var i = 0;

    for (i = 0; i < len; i++) {
        if (s.indexOf(s.charAt(i)) == s.lastIndexOf(s.charAt(i))) {
            return i;
        }
        
    }
    return -1;
};

firstUniqChar("leetcode")