var reverseString = function(s) {
    let l=s.length
    let left =0
    let right = l-1
    while(left < right){
        [s[left],s[right]]=[s[right],s[left]]
        left++
        right--
    }
    }
//双指针+交换顺序
//时间复杂度O（n），其中N 为字符数组的长度，一共执行了 N/2 次的交换
//空间复杂度o（1）只使用了常数空间来存放若干变量