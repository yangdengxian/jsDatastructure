/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
	var w = 0,
		h = 0, //宽高
		area = 0,
		i = 0,
		j = height.length - 1;

	while (i <= j) {
		w = j - i;
		h = Math.min(height[i], height[j]);
		area = Math.max(area, w * h);
		if (h == height[j]) {
			j--;
		} else {
			i++;
		}
	}

	/* for (let i = 0; i < height.length; i++) {
		for (let j = height.length - 1; j > i; j--) {
			w = j - i;
			h = Math.min(height[i], height[j]);
			area = Math.max(area, w * h);
		}
	} */

	return area;
};

maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]);
