var isSameTree = function(p, q) {
    let r = true
    function loop(p,q){
    if(!p&&!q){
    return true
    }
    if(!p||!q){
    return false
    }
    if(p.val !== q.val){
    return false
    }
    if(p.val === q.val){
    return loop(p.left,q.left)&&loop(p.right,q.right)
    }
    }
    return loop(p,q)
    };