/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    var sum = {};
    //不重复计算，如果对象已经存在key，直接使用
    sum[n] = loop(n, sum);

    function loop(n, sum) {
        if (!sum[n]) {
            if (n <= 2) {
                sum[n] = n
            } else {
                sum[n] = loop(n - 1, sum) + loop(n - 2, sum)
            }
        }
        return sum[n];
    }
    return sum[n];
};

var num = climbStairs(37, {})