/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
	var resNode = null;
	if (!l1 || !l2) return l1 || l2;

	resNode = l1.val < l2.val ? l1 : l2;

	resNode.next = mergeTwoLists(resNode.next, l1.val >= l2.val ? l1 : l2);

	return resNode;
};
