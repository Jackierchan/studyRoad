var moveZeroes = function(nums) {
    let l =nums.length
    let k = 0
    for(let i = 0;i<l;i++){
        if(nums[i]!==0){
            nums[k]=nums[i]
            k++
        }
    }
    for(let i =k;i<l;i++){
        nums[i]=0
    }
};