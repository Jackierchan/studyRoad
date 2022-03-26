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