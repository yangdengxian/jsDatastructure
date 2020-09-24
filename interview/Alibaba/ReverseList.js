/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
	var resultList = null;

	while (head != null) {
		var tempList = head.next;
		head.next = resultList;
		resultList = head;
		head = tempList;
	}

	return resultList;
};

function ListNode(val) {
	this.val = val;
	this.next = null;
}

reverseList(new ListNode(5));
