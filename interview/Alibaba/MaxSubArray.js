/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
	var subSumValue = 0,
		res = nums[0];
	for (var i = 0; i < nums.length; i++) {
		if (subSumValue <= 0) {
			subSumValue = nums[i];
			res = Math.max(res, subSumValue);
			continue;
		}
		subSumValue += nums[i];
		res = Math.max(res, subSumValue);
	}
	return res;
};

maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]);
