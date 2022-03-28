var numJewelsInStones = function(jewels, stones) {
    let set = new Set()
    let r = 0
    for(let i = 0 ;i<jewels.length;i++){
        set.add(jewels[i])
    }
    for(let i = 0 ;i<stones.length;i++){
        if(set.has(stones[i])){
        r=r+1
        }
    }
    return r
};