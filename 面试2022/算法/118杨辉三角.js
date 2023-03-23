var generate = function(numRows) {
    let arr=[]
    for(let i=0;i<numRows;i++){
        let nums = new Array(i+1).fill(1)
        for(let j = 1;j<nums.length-1;j++){ //前两行跳过，第三行开始
            nums[j] = arr[i-1][j-1] + arr[i-1][j]
        }
        arr.push(nums)
    }
    return arr
};

//时间复杂度O(n方),空间复杂度O(1)，不考虑返回值的空间占用
