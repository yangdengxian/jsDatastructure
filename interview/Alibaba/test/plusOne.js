/**
 * @param {number[]} digits
 * @return {number[]}
 * @description 如果数组中的所有元素都是9，类似9999，加1之后肯定会变为10000，也就是数组长度会增加1位。
如果数组的元素只要有一个不是9，加1之后直接返回即可。
考虑int整数型长度限制
 */
var plusOne = function(digits) {
    var len = digits.length;

    for (let i = len - 1; i >= 0; i--) {
        if (digits[i] < 9) {
            digits[i] = digits[i] + 1;
            return digits
        } else {
            digits[i] = 0;
        }
    }
    //除非数组中的元素都是9，否则不会走到这一步，
    //如果数组的元素都是9，我们只需要把数组的长度
    //增加1，并且把数组的第一个元素置为1即可

    digits.unshift(1)
    return digits;
};

plusOne(
    [9, 9, 9, 9, 9])