/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    while (head) {
        if (head.cycle) {
            return true
        } else {
            head.cycle = 1
            head = head.next
        }
    }
    return false;


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

List.prototype.update = function(node) {

}

List.prototype.remove = function(node) {
    if (this.length === 0) {
        throw 'node is undefined';
    }

    if (node === this.head) {
        this.head = node.next;
        this.length--;
        return;
    }

    let prevNode = this.head;

    while (prevNode.next !== node) {
        prevNode = prevNode.next;
    }

    if (node.next === null) {
        prevNode.next = null;
    }
    if (node.next) {
        prevNode.next = node.next;
    }
    this.length--;
}

List.prototype.search = function(val) {
    let node = this.head;
    while (node !== null && node.val !== val) {
        node = node.next;
    }
    return node;
}

var head = new List();

head.insert(head.createNode(1));
head.insert(head.createNode(2));
head.insert(head.createNode(3));
head.insert(head.createNode(4));

var bol = hasCycle(head.head);