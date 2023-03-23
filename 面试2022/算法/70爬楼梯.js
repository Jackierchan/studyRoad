// n=1 有一种
// n=2 有两种
// n=3 有三种 = 一种 +两种
// n=4 有五种 = 两种 +三种
// n=5 有八种 = 三种 +五种

// n n的数量 = n-1的数量 + n-2的数量

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
//时间复杂度O(n),空间复杂度O(1)

var climbStairs = function(n) {
    if(n==1||n==2){
        return n
    }
    return climbStairs(n-1)+climbStairs(n-2)
};
//时间复杂度O(2的n次方),空间复杂度O(1)

    

