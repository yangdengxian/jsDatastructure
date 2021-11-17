/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    var len = nums.length;
    var temp = [];
    for (let i = 0; i < len; i++) {
        temp[i] = nums[i];

    }
    for (let i = 0; i < len; i++) {
        nums[(i + k) % len] = temp[i];
    }
};

console.log(rotate([1, 2, 3, 4, 5, 6, 7]), 3);