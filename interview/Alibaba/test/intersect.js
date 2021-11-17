/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 * @description 1，先对数组进行排序
先对两个数组进行排序，然后使用两个指针，分别指向两个数组开始的位置。

如果两个指针指向的值相同，说明这个值是他们的交集，就把这个值加入到集合list中，然后两个指针在分别往后移一步。
如果两个指针指向的值不同，那么指向的值相对小的往后移一步，相对大的先不动，然后再比较
一直重复上面的操作，直到其中一个指针不能再移动为止，最后再把集合list转化为数组即可
nums1 = [4,9,5], nums2 = [9,4,9,8,4]
[61,24,20,58,95,53,17,32,45,85,70,20,83,62,35,89,5,95,12,86,58,77,30,64,46,13,5,92,67,40,20,38,31,18,89,85,7,30,67,34,62,35,47,98,3,41,53,26,66,40,54,44,57,46,70,60,4,63,82,42,65,59,17,98,29,72,1,96,82,66,98,6,92,31,43,81,88,60,10,55,66,82,0,79,11,81]
[5,25,4,39,57,49,93,79,7,8,49,89,2,7,73,88,45,15,34,92,84,38,85,34,16,6,99,0,2,36,68,52,73,50,77,44,61,48]

作者：数据结构和算法
链接：https://leetcode-cn.com/leetbook/read/top-interview-questions-easy/x2y0c2/?discussion=miIug2
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
 */
var intersect = function(nums1, nums2) {
    var intersectArray = [];
    var i = 0,
        j = 0;
    nums1.sort();
    nums2.sort();

    while (i < nums1.length && j < nums2.length) {
        if (nums1[i] < nums2[j]) {
            // 如果i指向的值小于j指向的值，，说明i指向
            // 的值小了，i往后移一步
            i++;
        } else if (nums1[i] > nums2[j]) {
            // 如果i指向的值大于j指向的值，说明j指向的值
            // 小了，j往后移一步
            j++;
        } else {
            // 如果i和j指向的值相同，说明这两个值是重复的，
            // 把他加入到集合list中，然后i和j同时都往后移一步
            intersectArray.push(nums1[i]);
            i++;
            j++;
        }

    }
    var results = [],
        index = 0;
    for (let k = 0; k < intersectArray.length; k++) {
        results[index++] = intersectArray[k];

    }
    return results;
};

intersect([4, 9, 5], [9, 4, 9, 8, 4])