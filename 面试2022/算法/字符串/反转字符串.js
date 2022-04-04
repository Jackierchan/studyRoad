var reverseString = function(s) {
    let l=s.length
    let left =0
    let right = l-1
    while(left < right){
    [s[left],s[right]]=[s[right],s[left]]
    left++
    right--
    }
    };
    //双指针+交换顺序