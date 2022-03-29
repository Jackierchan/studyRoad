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
    // console.log(stack.pop(),s[i])
    if(stack.pop()!==s[i]){
    return false
    }
    }
    }
    console.log(stack,'stack')
    if(stack.length>0){
    return false
    }
    return true
    };