var mergeTwoLists = function(list1, list2) {
    let c = new ListNode()
    let dummy = c
    while(list1!= null&&list2!=null){
        if(list1.val<=list2.val){
            dummy.next=list1
            list1=list1.next
        }else{
            dummy.next=list2
            list2=list2.next
        }
        dummy=dummy.next;
    }
    dummy.next = list1==null?list2:list1
    return c.next
};