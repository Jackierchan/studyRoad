var twoSum = function(numbers, target) {
    let left = 0,right = numbers.length-1
    while(left<right){
        if(numbers[left]+numbers[right]>target){
            right--
        }else if(numbers[left]+numbers[right]<target){
            left++
        }else{
            break
        }
    }
    return [++left,++right]
 };