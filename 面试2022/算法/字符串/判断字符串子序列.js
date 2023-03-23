var isSubsequence = function(s, t) {
    let a = 0 ,b = 0
    while(b<t.length){
        if(s[a]==t[b]){
            a++
        }
        b++
    }
    return a==s.length?true:false
};
//双指针
//时间复杂度O（s+t），每次无论是匹配成功还是失败，都有至少一个指针发生右移，两指针能够位移的总距离为s+t
//空间复杂度o（1）只使用了常数空间来存放若干变量