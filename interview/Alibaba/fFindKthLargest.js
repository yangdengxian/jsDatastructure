/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    nums = nums.sort(function(a, b) {
        return a - b;
    });

    return nums.splice(-k, 1)[0]

};