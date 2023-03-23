var addDigits = function(num) {
    while (num >= 10) {
        let sum = 0;
        while (num > 0) {
            sum += num % 10;
            num = Math.floor(num / 10);
        }
        num = sum;
    }
    return num;
};
//最直观的方法是模拟各位相加的过程，直到剩下的数字是一位数。
// 计算一个整数的各位相加的做法是，每次计算当前整数除以 
// 10 的余数得到最低位数，将最低位数加到总和中，然后将当前整数除以 
// 10。重复上述操作直到当前整数变成 
// 0，此时的总和即为原整数各位相加的结果。

// 时间复杂度：O(lognum),其中 num 是给定的整数。对于 num 计算一次各位相加需要 O(lognum) 的时间
// 空间复杂度：O(1)