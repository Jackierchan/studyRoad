var isValid = function(s) {
    let map =new Map()
    map.set('(',')')
    map.set('[',']')
    map.set('{','}')
    let stack = []
    for(let i = 0;i<s.length;i++){
        if(map.has(s[i])){
            stack.push(map.get(s[i]))
        }else{
            if(stack.pop()!==s[i]){
                return false
            }
        }
    }
    if(stack.length>0){
         return false
    }
    return true
};
 //时间复杂度O(n),遍历了一遍字符串
 //空间复杂度o（1）,最坏情况下，假如输入是 (((((((，栈的大小将是输入字符串的长度