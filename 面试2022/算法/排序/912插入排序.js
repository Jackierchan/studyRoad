//将一个元素插入到已有序的数组中，在初始时未知是否存在有序的数据，因此将元素第一个元素看成是有序的
//与有序的数组进行比较，比它大则直接放入，比它小则移动数组元素的位置，找到个合适的位置插入
function insertSort(arr) {
    for(let i = 1; i < arr.length; i++) { //外循环从1开始，默认arr[0]是有序段
        for(let j = i; j > 0; j--) { //j = i,将arr[j]依次插入有序段中
            if(arr[j] < arr[j-1]) {
            [arr[j],arr[j-1]] = [arr[j-1],arr[j]];
            } else {
            break;
            }
        }
    }
    return arr;
}

// 时间复杂度O(n^2)
// 空间复杂度也就为 O(1)