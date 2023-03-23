var inorderTraversal = function(root) {
    const res = [];
    const inorder = (root) => {
    if (!root) {
    return;
    }
    inorder(root.left);
    res.push(root.val);
    inorder(root.right);
    }
    inorder(root);
    return res;
};
    // 时间复杂度O(n),n为节点个树，
    // 空间复杂度O(n)，即递归的空间开销(树的高度)，最坏的情况下树是链表，所以是O(n)，平均空间复杂度O(logn)