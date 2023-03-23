var missingNumber = function(nums) {
    let l = nums.length
    let sum = (l+1)*(l/2) // (l+1)*(l+0)/2  (l+1)是长度，(l+0)/2  是平均
    let sum1=0
    for(let i = 0;i<nums.length;i++){
        sum1=sum1+nums[i]
    }
    return sum-sum1
};

//给定一个包含 [0, n] 中 n 个数的数组 nums ，找出 [0, n] 这个范围内没有出现在数组中的那个数。
// 时间复杂度O(n)，其中 n 是数组 nums 的长度。需要 O(1) 的时间计算从 0 到 n 的全部整数之和以及需要 O(n) 的时间计算数组 nums 的元素之和
// 空间复杂度也就为 O(1)，我们只需要常数的空间保存若干变量