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
   // 复杂度：时间复杂度O(n)，每个节点遍历一次，空间复杂度O(n)，递归栈深度，最深不超过n