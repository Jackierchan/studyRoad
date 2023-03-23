var sortArray = function(arr) {
    if(arr.length <= 1) {
    return arr; //递归出口
    }
    var pivotIndex = Math.floor(arr.length / 2)
    var left = [],
    right = [],
    current = arr.splice(pivotIndex,1)[0]; //注意splice后，数组长度少了一个
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] < current) {
        left.push(arr[i]) //放在左边
        } else {
            right.push(arr[i]) //放在右边
        }
    }
    return sortArray(left).concat(current,sortArray(right)); 
};

// 而在双路快排中，则是有两个游标，分别在数组的start位置（游标A）和end位置（游标B），
// 游标A从start开始向右寻找大于base（仍然取第一项）的值，游标B从end开始想做寻找小于等于base的值，
// 然后将两个值进行位置互换，然后接着寻找，知道两个游标相遇，将相遇位置的值和base值进行位置互换。
// 这样一次寻找过程结束，接下来对于左右两段进行重复的操作，直至整个数组排序完成
function fastSort(arr, start = 0, end = arr.length - 1) {
    // 终止条件
    if (start >= end) return false;
    let left = start, right = end, base = arr[start];
    while (left < right) {
        // 从右向左，寻找第一个小于base的值
        while (arr[right] > base && right >= left) right --;
        // 从左向右，寻找第一个大于base的值
        while (arr[left] <= base && left < right) left ++;
        // 将两个值交换位置
        [arr[left], arr[right]] = [arr[right], arr[left]];
    }
    // 将最后两个游标相遇的位置的值与base值交换
    [arr[start], arr[left]] = [arr[left], arr[start]];
    fastSort(arr, start, left - 1);
    fastSort(arr, right + 1, end)
}

// 时间复杂度最好的O(nlogn)，最坏的O(n^2)
// 空间复杂度也就为 O(logn)，最坏的O(n）
