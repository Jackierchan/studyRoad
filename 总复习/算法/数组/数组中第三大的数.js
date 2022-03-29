var thirdMax = function(nums) {
    nums = nums.sort((a,b)=>{
        return b-a
    }).filter((a,i,arr)=>{
        if(i<arr.length-1){
        return a!=arr[i+1]

        }else{
        return true

        }
    })
    return nums[2]!=undefined   ?nums[2]:nums[0]

};