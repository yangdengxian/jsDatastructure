/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
	var array = nums1.concat(nums2).sort(function (a, b) {
		return a - b;
	});

	var n = array.length,
		j = 0,
		mid = 0;

	mid = n % 2 ? array[Math.floor(n / 2)] : (array[n / 2 - 1] + array[n / 2]) / 2;

	return mid;
};

findMedianSortedArrays([1, 2], [3, 4]);
