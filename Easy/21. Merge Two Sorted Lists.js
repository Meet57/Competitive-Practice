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
    if (!l1) return l2
    if (!l2) return l1

    var final = new ListNode()
    var head = final

    while (l1 != null && l2 != null) {
        if (l1 && l1.val <= l2.val) {
            final.next = new ListNode(l1.val)
            l1 = l1.next
        } else {
            final.next = new ListNode(l2.val)
            l2 = l2.next
        }
        final = final.next
    }

    if (l1 != null) {
        final.next = l1
    }
    if (l2 != null) {
        final.next = l2
    }

    return head.next
};