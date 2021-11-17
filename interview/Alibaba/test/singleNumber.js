/**
 * @param {number[]} nums
 * @return {number}
 * @description 使用异或运算，将所有值进行异或
异或运算，相异为真，相同为假，所以 a^a = 0 ;0^a = a
因为异或运算 满足交换律 a^b^a = a^a^b = b 所以数组经过异或运算，单独的值就剩下了

作者：桂继宏
链接：https://leetcode-cn.com/leetbook/read/top-interview-questions-easy/x21ib6/?discussion=Mo9fKT
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
 */
var singleNumber = function(nums) {
    var reduce = 0;
    nums.forEach(num => {
        reduce = reduce ^ num;
    });
    return reduce;
};

console.log(singleNumber([4, 1, 2, 1, 2]));