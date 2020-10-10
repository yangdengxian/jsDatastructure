/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    var resNode = null;
    if (lists.length == 1) return lists[0];
    for (let i = 1; i < lists.length; i++) {
        resNode = mergeTwoLists(lists[i - 1], lists[i])
    }

    function mergeTwoLists(l1, l2) {
        var resNode = null;
        if (!l1 || !l2) return l1 || l2;

        resNode = l1.val < l2.val ? l1 : l2;

        resNode.next = mergeTwoLists(resNode.next, l1.val >= l2.val ? l1 : l2);

        return resNode;
    }

    return resNode;

};

function ListNode(val) {
    this.val = val;
    this.next = null;

}


function List() {
    this.length = 0;
    this.head = null;
}

List.prototype.createNode = function(val) {
    return new ListNode(val);
}

List.prototype.insert = function(node) {
    // 如果head后面有指向的节点
    if (this.head) {
        node.next = this.head;
    } else {
        node.next = null;
    }
    this.head = node;
    this.length++;
}

mergeKLists([
    [1]
])