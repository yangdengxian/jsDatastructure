/**
 * @param {number[]} nums
 * @return {number}
 * @description 使用两个指针，右指针始终往右移动，

如果右指针指向的值等于左指针指向的值，左指针不动。
如果右指针指向的值不等于左指针指向的值，那么左指针往右移一步，然后再把右指针指向的值赋给左指针。

作者：数据结构和算法
链接：https://leetcode-cn.com/leetbook/read/top-interview-questions-easy/x2gy9m/?discussion=4Zkrel
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
 */
var removeDuplicates = function(nums) {
    if (!nums || nums.length == 0) return 0;
    let left = 0
    for (var i = 0; i < nums.length; i++) {
        if (nums[left] != nums[i]) {
            nums[++left] = nums[i];
        }
    }
    return ++left;
};
var newNums = removeDuplicates([1, 1, 2]);
console.log(newNums);