/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
	var resultsArray = [],
		resultsMap = {},
		n = nums.length;
	nums = nums.sort(function (a, b) {
		return a - b;
	});

	for (var i = 0; i < n - 2; i++) {
		if (nums[i] > 0) {
			break;
		}

		if (i > 0 && nums[i] == nums[i - 1]) {
			continue;
		}

		var j = i + 1;
		var k = n - 1;
		while (j < k) {
			if (nums[j] + nums[k] < -nums[i]) {
				j++;
			} else if (nums[j] + nums[k] > -nums[i]) {
				k--;
			} else {
				resultsArray.push([nums[i], nums[j], nums[k]]);
				j++;
				k--;
				while (j < k && nums[j] == nums[j - 1]) {
					j++;
				}

				while (j < k && k != nums.length - 1 && nums[k] == nums[k + 1]) {
					k--;
				}
			}
		}
	}
	return resultsArray;
};
