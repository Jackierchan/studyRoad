var maxDepth = function(root) {
    if(!root) {
    return 0; //终止条件：当前节点为空
    } else {
    const left = maxDepth(root.left);
    const right = maxDepth(root.right);
    return Math.max(left, right) + 1;
    }
    };

    // 复杂度分析：时间复杂度O(n), 其中 n 为二叉树节点的个数。
    // 空间复杂度O(n), 其中n 表示二叉树的高度，最坏的情况下和树的节点数相同