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
// 回文串」是指倒序后和自身完全相同的字符串，即具有关于中心轴对称的性质。观察发现，

// 当回文串长度为偶数时，则所有字符都出现了偶数次；
// 当回文串长度为奇数时，则位于中心的字符出现了奇数次，其余所有字符出现偶数次；
// 根据以上分析，字符串能被构造成回文串的充要条件为：除了一种字符出现奇数次外，其余所有字符出现偶数次。判别流程如下：

// 借助一个 HashMap ，统计字符串 s 中各字符的出现次数；
// 遍历 HashMap ，统计构造回文串的最大长度，
// 将当前字符的出现次数向下取偶数（即若为偶数则不变，若为奇数则减 1 ），出现偶数次则都可组成回文串，因此计入 res ；
// 若此字符出现次数为奇数，则可将此字符放到回文串中心，因此将 odd 置 1 ；
// 返回 res + odd 即可

 //时间复杂度O(n), 其中 N 为字符串 s 长度。遍历字符串 s 和哈希表 counter 皆使用线性时间
 //空间复杂度o（1），由于 ASCII 字符数量为 128 ，哈希表 counter 最多使用 O(128)=O(1) 空间