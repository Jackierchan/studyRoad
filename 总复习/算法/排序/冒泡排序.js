//俩俩交换，大的放在后面，第一次排序后最大值已在数组末尾
function bubleSort(arr) {
    var len = arr.length;
    for (let outer = len ; outer >= 2; outer--) {
    for(let inner = 0; inner <=outer - 1; inner++) {
    if(arr[inner] > arr[inner + 1]) {
    let temp = arr[inner];
    arr[inner] = arr[inner + 1];
    arr[inner + 1] = temp;
    }
    }
    }
    return arr;
    }