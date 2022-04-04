var isSymmetric = function(root) {
    if(!root) return true
    function compare(left,right){
    if(!left && !right) return true
    if(!left || !right) return false
    if(left.val !== right.val) return false
    return compare(left.left,right.right) && compare(left.right,right.left)
    }
    return compare(root.left,root.right)
    };