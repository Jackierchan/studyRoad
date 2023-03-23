var firstUniqChar = function(s) {
    let map =new Map(),r
    for(let i = 0;i<s.length;i++){
        if(map.has(s[i])){
            map.set(s[i],map.get(s[i])+1)
        }else{
            map.set(s[i],0)
        }
    }
    for(let value of map.entries()){
        if(value[1]==0){
            r =  value[0]
            break
        }
    }
    return r ? s.indexOf(r) : -1
};
 //时间复杂度O(n)，其中 n 是字符串 s 的长度
 //空间复杂度空间复杂度：O(∣Σ∣)，其中 Σ 是字符集，在本题中 s 只包含小写字母，因此 Σ≤26，∣Σ∣≤26。我们需要 O(∣Σ∣) 的空间存储哈希映射