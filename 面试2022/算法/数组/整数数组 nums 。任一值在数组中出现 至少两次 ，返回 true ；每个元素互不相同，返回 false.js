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