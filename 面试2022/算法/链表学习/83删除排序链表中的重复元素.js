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
var deleteDuplicates = function(head) {
    if(!head){
        return head
    }
    let cur = head
    while(cur.next){
        if(cur.val==cur.next.val){
           cur.next=cur.next.next
        }else{
            cur=cur.next
        }

    }
    return head
};
// 细节:
// 当我们遍历到链表的最后一个节点时，cur.next 为空节点，如果不加以判断，访问 cur.next 对应的元素会产生运行错误。
// 因此我们只需要遍历到链表的最后一个节点，而不需要遍历完整个链表。
//时间复杂度O(n),其中 O(n)是链表的长度,空间复杂度O(1)
