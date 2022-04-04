function deepestLeavesSum (root){
    var mindep = 100000;
    var tatol = 0;
    function getout(root,dep){
        if(root == null)
        {
            return;
        }
        if(root.left == null && root.right == null)
        {
            if(dep < mindep)
            {
                mindep = dep;
                tatol = root.val;
            }
            else if(dep == mindep)
            {
                tatol += root.val;
            }
        }
       
        
        getout(root.left,dep+1);
        getout(root.right,dep+1);
    }
    getout(root,0);
    return tatol;
}