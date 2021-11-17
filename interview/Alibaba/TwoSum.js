var nums = [2, 7, 11, 15];

var target = 9;




/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var indexs = [];
    var map = {};
    for (let i = 0; i < nums.length; i++) {
        var secondVal = target - nums[i];
        map[nums[i]] = i;
        if (map[secondVal] == 0 || map[secondVal]) {
            indexs = [i, map[secondVal]]
            return indexs;
        }

    }
    return indexs;
};

indexs = twoSum(nums, target)
indexs