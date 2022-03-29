var preorderTraversal = function(root) {
    let arr = []
    function loop(root){
    if(!root){
    return
    }else{
    arr.push(root.val)
    loop(root.left)
    loop(root.right)
    }
    }
    loop(root)
    return arr
    };