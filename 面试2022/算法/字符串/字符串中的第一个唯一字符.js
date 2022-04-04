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