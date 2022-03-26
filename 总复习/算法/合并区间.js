var merge = function(intervals) {
    let length = intervals.length
    let r=[]
    intervals=intervals.sort((arr1,arr2)=>{
        if(arr1[0]===arr2[0]){
            return arr1[1]-arr2[1]
        }else{
            return arr1[0]-arr2[0]
        }
    })
    function is(arr1,arr2){
        if((arr1[0]<=arr2[0]&&arr2[0]<=arr1[1])||(arr1[0]<=arr2[1]&&arr2[1]<=arr1[1])){
            return true
        }else{
            return false
        }
    }   
    for(let i=0;i<length-1;i++){
        if(is(intervals[i],intervals[i+1])){
            let left = Math.floor(intervals[i][0],intervals[i+1][0])
            let right = Math.max(intervals[i][1],intervals[i+1][1])
            intervals[i+1]=[left,right]
        }else{
            r.push(intervals[i])
        }
    }
    r.push(intervals[length-1])
    return r  
};