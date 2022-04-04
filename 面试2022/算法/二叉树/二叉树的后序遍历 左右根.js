var postorderTraversal = function(root) {
    let arr= []
    function loop(root){
    if(!root){
    return
    }else{
    loop(root.left)
    loop(root.right)
    arr.push(root.val)
    }
    }
    loop(root)
    return arr
    };