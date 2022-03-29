//给定一个未经排序的整数数组，找到最长且 连续递增的子序列，并返回该序列的长度。
var findLengthOfLCIS = function(nums) {
    let l1=0, r=0
    for(let i=1;i<nums.length;i++){
        if(nums[i]>nums[i-1]){
            r=Math.max(r,i-l1+1)
        }else{
            l1=i
        }
    }
    return r===0?1:r
};