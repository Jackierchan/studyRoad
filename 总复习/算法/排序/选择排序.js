//找到数组中最大的元素，与数组最后一位元素交换
function selectSort(arr) {
    var len = arr.length;
    for(let i = 0 ;i < len - 1; i++) {
    for(let j = i ; j<len; j++) {
    if(arr[j] < arr[i]) {
    [arr[i],arr[j]] = [arr[j],arr[i]];
    }
    }
    }
    return arr
    }