var strStr = function(haystack, needle) {
    if(needle ===''){
    return 0
    }
    let res =-1
    for(let i = 0; i<haystack.length ;i++){
    if(needle.length==1){
    if(haystack[i]==needle){
    res = i
    break
    }
    }else{
    if(needle[0]===haystack[i]){
    if(haystack.slice(i,i+needle.length)===needle){
    res= i
    break
    }
    }
    }
    }
    return res
    };