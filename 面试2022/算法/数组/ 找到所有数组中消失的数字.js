// 给你一个含 n 个整数的数组 nums ，其中 nums[i] 在区间 [1, n] 内。请你找出所有在 [1, n] 范围内但没有出现在 nums 中的数字，并以数组的形式返回结果。

var findDisappearedNumbers = function(nums) {
    let map  = new Map()
    let r=[]
    for(let i = 0;i<nums.length;i++){
        map.set(nums[i],1)
    }
    for(let i = 1;i<=nums.length;i++){
        if(map.get(i)!==1){
            r.push(i)
        }
    }
    return r
};