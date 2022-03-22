function TreeNode(val, left, right) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
         this.right = (right===undefined ? null : right)
     }
var mergeTrees = function(root1, root2) {
    if(!root1) return root2
    if(!root2) return root1
    root1.val = root1.val + root2.val
    root1.left = mergeTrees(root1.left, root2.left)
    root1.right = mergeTrees(root1.right, root2.right)
    return root1
};
console.log(mergeTrees([1,3,2,5],[2,1,3,null,4,null,7]))