var searchRange = function(nums, target) {
    let l = 0; 
    let r = nums.length - 1;
    let mid = -1;
    while(l <= r) {
        mid = Math.floor((l + r)/2) ;
        if (nums[mid] === target) {
            break;
        } else if (nums[mid] > target){
            r = mid -1;
        } else if (nums[mid] < target) {
            l = mid + 1;
        }
    }
    if (l > r) return [-1, -1];
    // 找到一个值后像两侧找
    let i = mid; let j = mid;
    while(nums[i] === nums[i-1]) i--;
    while(nums[j] === nums[j+1]) j++;
    return [i, j];
};
//时间复杂度是O(logn)