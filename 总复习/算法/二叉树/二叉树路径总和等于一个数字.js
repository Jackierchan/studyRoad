var hasPathSum = function(root, targetSum) {
    if(!root) return false
    let flag = false
    function loop (root,val){
    if(!root.left&&!root.right&&val == targetSum){
    flag =true
    }
    if(root.left) loop(root.left,val+root.left.val)
    if(root.right) loop(root.right,val+root.right.val)
    
    }
    loop(root,root.val)
    return flag
    };