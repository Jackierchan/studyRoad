// 利用数组判断
var hasCycle = function(head) {
    let res =[]
    while(head){
        if(res.includes(head)){
            return true
        }
        res.push(head)
        head=head.next
    }
    return false
}
// 快慢指针
const hasCycle = function(head) {
    if(head === null || head.next === null) {
      return false;
    }
    let slow = head;
    let fast = head.next;
    while (slow) {
      if(slow === fast) {
        return true
      }
      slow = slow?.next || null;
      fast = fast?.next?.next || null;
    }
    return false;
  };
// 我们定义两个指针，一快一慢。慢指针每次只移动一步，而快指针每次移动两步。
// 初始时，慢指针在位置 head，而快指针在位置 head.next。
// 这样一来，如果在移动的过程中，快指针反过来追上慢指针，就说明该链表为环形链表。
// 否则快指针将到达链表尾部，该链表不为环形链表
//时间复杂度O(n),其中 其N是链表中的节点数,空间复杂度O(1)
