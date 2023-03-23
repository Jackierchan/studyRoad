var findUnsortedSubarray = function(nums) {
    let newArr = [...nums].sort((a,b)=>{
        return a-b
    })
    let flag = false
    for(let i = 0;i<newArr.length;i++){
        if(newArr[i]!==nums[i]){
            flag=true
            break
        }
    }
    if(!flag){
        return 0
    }
    let left = 0,right = nums.length-1
    while(newArr[left]==nums[left]){
        left++
    }
    while(newArr[right]==nums[right]){
        right--
    }
    return right-left+1
};
//时间复杂度：O(nlogn)，其中 n 为给定数组的长度，我们需要 O(nlogn) 的时间进行排序，
// 以及 O(n) 的时间遍历数组，因此总时间复杂度为O(n)
// 空间复杂度：O(n)，其中 n 为给定数组的长度。我们需要额外的一个数组保存排序后的数