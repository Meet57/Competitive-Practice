/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
    if (head == null || head.next == null) return head
    head.next = deleteDuplicates(head.next)
    return head.val == head.next.val ? head.next : head
};

var deleteDuplicates = function (head) {
    //base casees
    if(head == null || head.next == null) return head

    var temp = head.next,prev = head
    while(temp != null){
        if(prev.val == temp.val){
            prev.next = temp.next
        }else{
            prev = temp
        }
        temp = temp.next
    }

    return head
};