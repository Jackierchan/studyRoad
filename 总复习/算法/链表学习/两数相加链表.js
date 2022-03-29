// 给你两个 非空 的链表，表示两个非负的整数。它们每位数字都是按照 逆序 的方式存储的，并且每个节点只能存储 一位 数字。
// 请你将两个数相加，并以相同形式返回一个表示和的链表。
var addTwoNumbers = function(l1, l2) {
    let first =l1
    let second =l2
    while(first||second){
        let aa =first.val?first.val:0
        let bb =second.val?second.val:0
        if(aa+bb>=10){
            first.val =(aa+bb)%10
            if(first.next){
                first.next.val++
            }else{
                first.next= new ListNode(1)
            }
        }else{
           first.val=aa+bb
        }
        if(first.next==null&&second.next==null){
            break
        }else if(first.next==null&&second.next){
            first.next = new ListNode(0)

        }else if(first.next&&second.next==null){
            second.next = new ListNode(0)
                    
        }
           first=first.next
           second=second.next
    }
    return l1
};