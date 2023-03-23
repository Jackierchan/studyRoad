var isPalindrome = function(head) {
    let arr=[]
    while(head){
        arr.push(head.val)
        head=head.next
    }
    let i=0,j=arr.length-1
    for(i,j;i<j;i++,j--){
        if(arr[i]!=arr[j]){
            return false
        }
    }
    return true
};
////时间复杂度O(n),其中n指的是链表的元素个数,
//空间复杂度O(n),其中 n 指的是链表的元素个数,我们使用了一个数组列表存放链表的元素值
