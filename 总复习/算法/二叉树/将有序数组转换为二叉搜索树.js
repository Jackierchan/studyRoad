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