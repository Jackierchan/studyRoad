//我们从根节点开始，递归地对树进行遍历，并从叶子节点先开始翻转。
//如果当前遍历到的节点 \textit{root}root 的左右两棵子树都已经翻转，那么我们只需要交换两棵子树的位置，
//即可完成以 \textit{root}root 为根节点的整棵子树的翻转
var invertTree = function(root) {
    if(!root){
    return root
    }
    let l =invertTree(root.left)
    let r = invertTree(root.right)
    root.left=r
    root.right =l
    return root
    };