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