//给定一个包含大写字母和小写字母的字符串 s ，返回 通过这些字母构造成的 最长的回文串 。

//在构造过程中，请注意 区分大小写 。比如 "Aa" 不能当做一个回文字符串。
var longestPalindrome = function(s) {
    let map=new Map()
    let r =0
    for(let i=0;i<s.length;i++){
        map.set(s[i],map.get(s[i])?map.get(s[i])+1:1)
    }
    let flag = false
    for(const [key,value] of map.entries()){
        if(value>1){
            if(value%2===1){
                r=r+value-1
                flag =true
            }else{
                r=r+value
            }
        }else{
            flag =true
        }
    }
    if(flag){
        r=r+1
    }
    return r
};