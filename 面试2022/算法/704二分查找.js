// 给定一个 n 个元素有序的（升序）整型数组 nums 和一个目标值 target  ，
// 写一个函数搜索 nums 中的 target，如果目标值存在返回下标，否则返回 -1。
var search = function(nums, target) {
    let l = 0;
    let right=nums.length-1
      let mid,r=-1
    while(l<=right){
        mid = Math.floor((l +right)/2 )
        if(nums[mid]==target){
            return mid
        }else if(nums[mid]<target){
            l = mid+1
        }else {
            right = mid-1
        }
    }
    return r
};
console.log(search([-1,0,3,5,9,12],9))
//时间复杂度O(logn),空间复杂度O(1)
