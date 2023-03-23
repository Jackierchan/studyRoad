//递归法
//不断找中点，树往左右拓展
//二叉搜索树的中序遍历是升序序列，题目给定的数组是按照升序排序的有序数组，因此可以确保数组是二叉搜索树的中序遍历序列。
var sortedArrayToBST = function(nums) {
    function loop(nums,left,right){
        if(left>right) return null
        let mid = Math.floor((left+right)/2)
        let l =loop(nums,left,mid-1)
        let r = loop(nums,mid+1,right)
        let root = new TreeNode(nums[mid],l,r)
        return root
    }
    return loop(nums,0,nums.length-1)
};
// 重点：从数组中间开始自然能保证高度平衡和二叉搜索树
// 给你一个整数数组 nums ，其中元素已经按 升序 排列，请你将其转换为一棵 高度平衡 二叉搜索树。

// 高度平衡:是一棵满足「每个节点的左右两个子树的高度差的绝对值不超过 1 」的二叉树。
// 有效 二叉搜索树定义如下：
// 节点的左子树只包含 小于 当前节点的数。
// 节点的右子树只包含 大于 当前节点的数。
// 所有左子树和右子树自身必须也是二叉搜索树。
