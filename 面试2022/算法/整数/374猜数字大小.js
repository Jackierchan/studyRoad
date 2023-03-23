var guessNumber = function(n) {
    let left =1
    let flag
    while(left<=n){
        // flag = Math.floor(left+(n-left)/2) 防止溢出
        flag = Math.floor((left+n)/2)
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
//时间复杂度O(logn),时间复杂度即为二分的次数，每次二分我们将区间的长度减小一半，直至区间长度为 1 时二分终止，
// 而区间初始长度为n,因此二分次数为 O(logn)
// 空间复杂度O(1)
