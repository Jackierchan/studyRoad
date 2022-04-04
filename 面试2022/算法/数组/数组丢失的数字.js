var missingNumber = function(nums) {
    let l = nums.length
    let sum = (l+1)*(l/2)
    let sum1=0
    for(let i = 0;i<nums.length;i++){
        sum1=sum1+nums[i]
    }
    return sum-sum1
};

//给定一个包含 [0, n] 中 n 个数的数组 nums ，找出 [0, n] 这个范围内没有出现在数组中的那个数。