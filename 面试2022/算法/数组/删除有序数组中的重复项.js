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