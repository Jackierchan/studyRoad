var maxDepth = function(root) {
    if(!root) {
    return 0; //终止条件：当前节点为空
    } else {
    const left = maxDepth(root.left);
    const right = maxDepth(root.right);
    return Math.max(left, right) + 1;
    }
    };