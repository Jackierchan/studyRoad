var climbStairs = function(n) {
    if(n==1||n==2){
    return n
    }
    let r =[1,2]
    for(let i = 2;i<n;i++){
    r[i] = r[i-1]+r[i-2]
    }
    return r[r.length-1]
    
    };

