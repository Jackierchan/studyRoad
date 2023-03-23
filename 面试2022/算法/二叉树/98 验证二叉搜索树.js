var isValidBST = function(root,min=-Infinity,max=Infinity) {
    if(!root) return true
    if(root.val<=min||root.val>=max) return false
    return isValidBST(root.left,min,root.val)&&isValidBST(root.right,root.val,max)
};
//设立上下基准

// 有效 二叉搜索树定义如下：

// 节点的左子树只包含 小于 当前节点的数。
// 节点的右子树只包含 大于 当前节点的数。
// 所有左子树和右子树自身必须也是二叉搜索树。
