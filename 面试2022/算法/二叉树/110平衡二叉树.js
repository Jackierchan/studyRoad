var isBalanced = function(root) {
    if (root === null) return true;
    let is = true;
    function getHeight(node = root) {
        if (!is) return 0;
        if (node === null) return 0;
        let left = getHeight(node.left);
        let right = getHeight(node.right);
        if (Math.abs(left - right) > 1) is = false;
        return Math.max(left, right)+1;//返回左右子树中高度较高的，为基准
    }
    getHeight();
    return is;
};
//一个二叉树每个节点 的左右两个子树的高度差的绝对值不超过 1 。