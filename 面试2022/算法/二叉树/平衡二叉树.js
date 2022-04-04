var isBalanced = function(root) {
    let r = true
    let loop = (root,level ) => {
        if(!root){
            return level
        }
        let left =loop(root.left,level+1)
        if(!r){
            return left
        }
        let right =loop(root.right,level+1)
        if(!r){
            return right
        }
        if(Math.abs(left-right)>1) r=false
        return Math.max(left,right)
    }
    loop(root,0)
    return r
};
//一个二叉树每个节点 的左右两个子树的高度差的绝对值不超过 1 。