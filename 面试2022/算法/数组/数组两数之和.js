var twoSum = function(nums, target) {
    var map = new Map()
    for(var i=0;i<nums.length;i++){
    if(map.has(target-nums[i])){
    return [i,map.get(target-nums[i])]
    }else{
    map.set(nums[i],i)
    }
    }
    };