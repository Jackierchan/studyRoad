// 给定一个大小为 n 的数组，找到多数元素。多数元素是指在数组中出现次数 大于 ⌊ n/2 ⌋ 的元素。

var majorityElement = function(nums) {
    let map =new Map()
    let r
    for(let i = 0;i<nums.length;i++){
        if(map.get(nums[i])){
             map.set(nums[i],map.get(nums[i])+1)
        }else{
             map.set(nums[i],1)
        }
        if((map.has(nums[i])&&(map.get(nums[i])>nums.length/2))){
             r = nums[i]
             break
        }
    }
    return r
};

//时间复杂度：O(n)
// 空间复杂度：O(n)