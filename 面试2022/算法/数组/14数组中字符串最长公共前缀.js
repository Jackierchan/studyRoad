var longestCommonPrefix = function(strs) {
    // let m=new Map()
    let first = strs[0]
    let r =''
    if(strs.length==0){
      return ''
    }
    for(let i=0;i<first.length;i++){
        let flag=1
        for(let j =1;j<strs.length;j++){
            if(first[i]!== strs[j][i]){
                flag=0
            }
        }
        if(flag===1){
            r=r+first[i]
        }else{
            break
        }
    }
    return r
};

// 时间复杂度O(mn)，其中 m 是字符串数组中的字符串的平均长度，n 是字符串的数量。最坏情况下，字符串数组中的每个字符串的每个字符都会被比较一次
// 空间复杂度也就为 O(1)，额外使用的空间为常数