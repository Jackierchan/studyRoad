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