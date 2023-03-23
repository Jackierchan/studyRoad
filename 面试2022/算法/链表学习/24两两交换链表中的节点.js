var swapPairs = function(head) {
    let result =new ListNode(0)
    let dummy=result
     result.next=head
    while(result.next&&result.next.next){
        let n1=result.next
        let n2 = result.next.next
        result.next=n2
        n1.next=n2.next
        n2.next=n1
        result=n1
    }
    return dummy.next
};
//时间复杂度O(n),中n 是链表的节点数量。需要对每个节点进行更新指针的操
//空间复杂度O(1)
