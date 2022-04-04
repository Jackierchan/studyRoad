var guessNumber = function(n) {
    let left =1
    let flag
    while(left<=n){
        flag = Math.floor(left+(n-left)/2)
        if(guess(flag)===-1){
            n=flag-1
        }else if(guess(flag)===1){
            left=flag+1
        }else if(guess(flag)===0){
            return flag
        }
    }
};
//二分查找