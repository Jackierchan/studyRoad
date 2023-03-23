var reverseList = function(head) {
    let prev = null, curr = head
    while (curr) {
        const next = curr.next
        curr.next = prev
        prev = curr
        curr = next
    }
    return prev
};
//时间复杂度O(n),其中n 是链表的长度。需要遍历链表一次
//空间复杂度O(1)
