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