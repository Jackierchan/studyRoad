var maxSubArray = function(nums) {
    let sumMax=nums[0]
    let arr1=[nums[0]]
    for(let i=1;i<nums.length;i++){
        arr1[i]=Math.max(nums[i]+arr1[i-1],nums[i])
        sumMax=Math.max(sumMax,arr1[i])
    }
    return sumMax
};