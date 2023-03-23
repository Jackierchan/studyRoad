// 斐波那契数 （通常用 F(n) 表示）形成的序列称为 斐波那契数列 。该数列由 0 和 1 开始，后面的每一项数字都是前面两项数字的和。也就是：

// F(0) = 0，F(1) = 1
// F(n) = F(n - 1) + F(n - 2)，其中 n > 1

var fib = function(N) {
    if (N < 2) return N;
    return fib(N - 1) + fib(N - 2);
}
// 最简单的解法但也是最耗时的解法
// 时间复杂度为二者相乘，即 O(2^n)
var fib = function(N) {
    if ( N <= 1) return N;
    const result = new Array(N);
    result[0] = 0;
    result[1] = 1;
    for (let i = 2; i < N + 1; i++) {
        result[i] = result[i - 1] + result[i - 2];
    }
    return result[N];
}
// 时间复杂度，即 O(n)
// 空间复杂度，即 O(n)

var fib = function(n) {
    if (n < 2) {
        return n;
    }
    let p = 0, q = 0, r = 1;
    for (let i = 2; i <= n; i++) {
        p = q;
        q = r;
        r = p + q; 
    }
    return r;
};
// 时间复杂度：O(n)。
// 空间复杂度：O(1)。
