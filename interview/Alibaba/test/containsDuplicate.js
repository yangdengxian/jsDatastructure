/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {

    if (!nums || nums.length == 0) return false;
    var set = new Set(nums);
    if (Array.from(set).length == nums.length) return false;
    return true;

};

containsDuplicate([1, 2, 3, 4])