var searchRange = function(nums, target) {
    let left=0 ; right=nums.length-1
    let result=[]
    while(left<=right){
        let mid =Math.floor(left,right)
        if(nums[mid]>target){
            right=mid-1
        }else if(nums[mid]<target){
            left = mid+1
        }else{
            result.push(mid)
            left++
        }
    } 
     if(result.length===0){
         return [-1,-1]
     }else if(result.length==1){
         return [result[0],result[0]]
     }else if(result.length>2){
        return [result[0],result[result.length-1]]
     }else{
         return result

     }
};