var binaryTreePaths = function(root) {
    let r=[]
    let loop = (root,path) => {
        if(!root){
            return
        }
        path = path+String(root.val)
        if(!root.left&&!root.right){
            r.push(path)
        }else{
            path =path+'->'
            loop(root.left,path)
            loop(root.right,path)
        }
    }
    loop(root,'')
    return r
};
//深度优先搜索
// 时间复杂度 O(n2)
// 空间复杂度 O(n2)