// 给你一个整数数组 nums ，请计算数组的 中心下标 。

// 数组 中心下标 是数组的一个下标，其左侧所有元素相加的和等于右侧所有元素相加的和。

// 如果中心下标位于数组最左端，那么左侧数之和视为 0 ，因为在下标的左侧不存在元素。这一点对于中心下标位于数组最右端同样适用。

// 如果数组有多个中心下标，应该返回 最靠近左边 的那一个。如果数组不存在中心下标，返回 -1 。

var pivotIndex = function(nums) {
    let total = nums.reduce((e,e1)=>e+e1)
    let halfSum= 0
    for(let i = 0;i<nums.length;i++){
        if(2*halfSum+nums[i]===total){
            return i
        }
        halfSum=halfSum+nums[i]
    }
    return -1
};
//左右侧元素相等即为 \textit{sum}=\textit{total}-\textit{nums}_i-\textit{sum}sum=total−nums 