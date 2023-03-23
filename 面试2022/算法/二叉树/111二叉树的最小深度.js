var minDepth = function(root) {
    if (root == null) return 0;
    else if (root.left == null) {
    return minDepth(root.right) + 1;
    } else if (root.right == null) {
    return minDepth(root.left) + 1;
    } else{
    return Math.min(minDepth(root.left), minDepth(root.right)) + 1;
    }
    };

    var minDepth = function(root) {
        if(root == null) {
            return 0;
        }
        if(root.left == null && root.right == null) {//遍历到叶子结点终止
            return 1;
        }
        let ans = Number.MAX_SAFE_INTEGER;//(最大安全整数)
        if(root.left != null) {
            ans = Math.min(minDepth(root.left), ans);//递归左子树，找到左子树的最小深度
        }
        if(root.right != null) {
            ans = Math.min(minDepth(root.right), ans);//递归右子树，找到右子树的最小深度
        }
        return ans + 1;//最小深度等于左右子树最小深度+1
    };
    //复杂度分析：时间复杂度O(n), 其中 n 为二叉树节点的个数。空间复杂度O(n), 其中n 表示二叉树的高度，
    //最坏的情况下树呈现链状，和树的节点数相同，平均情况下树的高度与节点数的对数正相关，空间复杂度为 O(logn)