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
    //复杂度：时间复杂度O(n)，n是节点较少的树中的节点个数，递归有一个节点为null，另一个不为null就停止递归，
    //空间复杂度O(n),递归深度不会超过节点个数