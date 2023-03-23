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
// 时间复杂度：O(m+n)，
// 空间复杂度：O(m)，其中 m 是字符串 jewels 的长度。使用哈希集合存储字符串 jewels 中的字符