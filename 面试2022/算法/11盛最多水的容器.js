/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    if(height.length==2){
        return Math.min(height[0],height[1])
    }
    let result = 0
    let left = 0,right =height.length-1
    while(left<right)
    {
        result=Math.max(result,(right-left)*(Math.min(height[left],height[right])))
        if(height[left]<=height[right]){
            left++
        }else{
            right--
        }
    }
    return result
};


// 此时我们需要移动一个指针。移动哪一个呢？直觉告诉我们，应该移动对应数字较小的那个指针（即此时的左指针）。这是因为，由于容纳的水量是由
// 两个指针指向的数字中较小值∗指针之间的距离
// 决定的。如果我们移动数字较大的那个指针，那么前者「两个指针指向的数字中较小值」不会增加，后者「指针之间的距离」会减小，
// 那么这个乘积会减小。因此，我们移动数字较大的那个指针是不合理的。因此，我们移动 数字较小的那个指针。
