var missingNumber = function(nums) {
    let l = nums.length
    let sum = (l+1)*(l/2)
    let sum1=0
    for(let i = 0;i<nums.length;i++){
        sum1=sum1+nums[i]
    }
    return sum-sum1
};