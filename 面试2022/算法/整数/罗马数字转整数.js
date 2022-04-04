var romanToInt = function(s) {
    let hash = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
    }
    let res =0
    for(let i= 0;i<s.length;i++){
    if(hash[s[i]] < hash[s[i+1]]){
    res=res-hash[s[i]]
    }else{
    res= res+hash[s[i]]
    }
    }
    return res
    };