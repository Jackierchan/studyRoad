function mySqrt(x){
    if(x==1) return 1;
    let left = 1,right=x,mid = Math.floor((left+right)/2);
    while(left<=right) {
        if(mid*mid>x) {
            right = mid-1;
        } else if(mid*mid<x) {
            left = mid+1;
        } else {
            return mid;
        }
        mid = Math.floor((left+right)/2);
    }
    return mid;
};
// 时间复杂度：O(logx)，即为二分查找需要的次数。
// 空间复杂度：O(1)。