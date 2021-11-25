/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    if (nums == null || nums.length == 0)
        return;
    let k = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] != 0) {
            nums[k++] = nums[i];
        }

    }

    while (k < nums.length) {
        nums[k++] = 0
    }

};

moveZeroes([0, 1, 0, 5, 3])