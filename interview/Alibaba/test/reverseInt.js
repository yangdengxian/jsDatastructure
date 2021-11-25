/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    var y = Math.abs(x);
    var len = y.toString().length;
    var newNum = 0;
    while (len > 0) {
        newNum += (y%10)*Math.pow(10,len - 1);
        len--;
        y = Math.floor(y/10);
    }
    return newNum > Math.pow(2,31) - 1 || newNum < -Math.pow(2,31) ? 0 : 
        ((x >=0 ) ? newNum : -newNum);
};
console.log(reverse(1534236469))