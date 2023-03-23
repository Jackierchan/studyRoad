/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    let dummy = new ListNode(0)
    dummy.next=head
    let  h=dummy
    while(h.next!==null){
        if(h.next.val==val){
            h.next=h.next.next
        }else{
            h=h.next
        }
    }
    return dummy.next
};
////时间复杂度O(n),其中 n 是链表的长度。需要遍历链表一次
//空间复杂度O(1)
