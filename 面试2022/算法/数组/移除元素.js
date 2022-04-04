var removeElement = function(nums, val) {
    let num = 0
    for(let i = 0;i<nums.length;i++){
    if(nums[i]!==val){
    nums[num] = nums[i]
    num++
    }
    }
    return num
    };