var hasPathSum = function(root, targetSum) {
    if(!root) return false
    let flag = false
    function loop (root,val){
       // if(!root) return 
    if(!root.left&&!root.right&&val == targetSum){
    flag =true
    }
    if(root.left) loop(root.left,val+root.left.val)
    if(root.right) loop(root.right,val+root.right.val)
    
    }
    loop(root,root.val)
    return flag
    };
//时间复杂度为O(n) 因为深度遍历了节点
//空间复杂度为O(n) 这里使用了递归存在函数调用堆栈 n就是这个栈的高度 在最坏的情况下n为n 最好的情况下n为logn