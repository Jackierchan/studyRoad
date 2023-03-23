var removeDuplicates = function(nums) {
    if(nums.length===1){
        return 1
    }
    let k = 0
    for(let i = 1;i<nums.length;i++){
        if(nums[k] !== nums[i] ){
            nums[k+1]=nums[i]
            k++
        }
    }
    return k+1
    };
// 时间复杂度O(n)，其中 n 为数组的长度。快指针和慢指针最多各移动 n 次
// 空间复杂度也就为 O(1)，我们只需要常数的空间保存若干变量