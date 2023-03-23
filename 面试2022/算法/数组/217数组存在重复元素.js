var containsDuplicate = function(nums) {
    let map = new Map()
    let r =false
    for(let i = 0;i<nums.length;i++){
        if(!map.has(nums[i])){
             map.set(nums[i],i)
        }else{
             r= true
        }
    }
    return r
};
// 时间复杂度O(n)，其中 N 为数组的长度
// 空间复杂度也就为 O(n)，其中 N 为数组的长度。