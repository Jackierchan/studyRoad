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

// 时间复杂度O(n)，其中 n 为序列的长度。我们只需要遍历该序列至多两次
// 空间复杂度也就为 O(1)，我们只需要常数的空间保存若干变量