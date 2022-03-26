var permute = function(nums) {
    let r = []
    function loop(arr){
        if(arr.length===nums.length){
            r.push(arr)
        }
        nums.forEach((e)=>{
            if(arr.includes(e)){
                return
            }
            return loop(arr.concat(e))
        })
    }
    loop([])
    return r
};