var hammingWeight = function(n) {
    let r=0
    while(n){
        n=n&(n-1)
        r++
    }
    return r
};
//n~\&~(n - 1)n & (n−1)，其运算结果恰为把 nn 的二进制位中的最低位的 11 变为 00 之后的结果。