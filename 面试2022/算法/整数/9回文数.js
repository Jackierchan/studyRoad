var isPalindrome = function(x) {
    if(x<0){
    return false
    }
    let str = x+''
    let f =0
    for(let i = 0;i<str.length;i++){
        f = f+ (x%10) * Math.pow(10,str.length-i-1)
        x=Math.floor(x/10)
        // console.log(x)
    }
    return f==str
};

//双指针遍历比较法
var isPalindrome = function(x) {
    let temp = x.toString()
    const n = Math.floor(temp.length / 2)
    for(let i = 0; i < n; i++){
        if(temp[i] !== temp[temp.length-i-1]) return false
    }
    return true
};