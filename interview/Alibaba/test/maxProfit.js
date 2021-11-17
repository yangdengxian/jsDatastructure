/**
 * @param {number[]} prices
 * @return {number}
 * @description 贪心算法是指，在对问题求解时，总是做出在当前看来是最好的选择。也就是说，不从整体最优上加以考虑，算法得到的是在某种意义上的局部最优解。
 * 那么这道题使用贪心算法也是最容易解决的，只要是上涨的我们就要计算他们的差值进行累加，不需要再找开始上涨的最小值和最大值。为什么能这样计算，我举个例子。



比如a<b<c<d，因为从a到d一直是上涨的，那么最大值和最小值的差值就是d-a，也可以写成(b-a)+(c-b)+(d-c)，搞懂了这个公式所有的一切都明白了。如果还不明白，可以想象成数组中前一个值减去后一个值，构成一个新的数组，我们只需要计算这个新数组中正数的和即可，这里以示例1为例画个图看下

作者：数据结构和算法
链接：https://leetcode-cn.com/leetbook/read/top-interview-questions-easy/x2zsx1/?discussion=KwAnTs
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
 */
var maxProfit = function(prices) {
    if (!prices || prices.length == 0) return 0;

    let total = 0;
    for (let i = 0; i < prices.length - 1; i++) {
        total += Math.max(prices[i + 1] - prices[i], 0);

    }
    return total;
};

var total = maxProfit([7, 1, 5, 3, 6, 4]);
console.log(total);