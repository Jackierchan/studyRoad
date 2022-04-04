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