var threeSum = function(nums) {
    let i=0
    let r=[]
    nums=nums.sort(function(a,b){
    return a-b
    })
    for(i;i<nums.length-2;i++){
    if(i==0||nums[i]!==nums[i-1]){
    let start=i+1,end=nums.length-1
    while(start<end){
    if(nums[i]+nums[start]+nums[end]===0){
    r.push([nums[i],nums[start],nums[end]])
    start=start+1
    end=end-1
    while(start<end&&nums[start]===nums[start-1]){
    start=start+1
    }
    while(start<end&&nums[end]===nums[end+1]){
    end=end-1
    }
    }else if(nums[i]+nums[start]+nums[end]<0){
    start=start+1
    
    }else{
    end=end-1
    }
    }
    }
    }
    return r
    };