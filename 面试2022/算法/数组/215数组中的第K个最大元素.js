var findKthLargest = function(nums, k) {
  if(nums.length==1){
      return nums[0]
  }
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
  return sortArray(nums)[nums.length-k+1] 
};
// 时间复杂度O(logn)
// 空间复杂度：O(logn)
var findKthLargest = function (nums, k) {
  let ans = nums[0];
  const quickSort = (nums, k) => {
      if (nums.length < 2) {
          ans = nums[0];
          return;
      }
      // const midIndex = Math.floor(Math.random(nums.length)); // 随机取下标，耗时更长
      const midIndex = Math.floor(nums.length/2)
      const mid = nums[midIndex];
      const leftArr = [],
          rightArr = [];
      for (let i = 0; i < nums.length; i++) {
          if (i === midIndex) {
              continue;
          }
          if (nums[i] <= mid) {
              leftArr.push(nums[i]);
          } else {
              rightArr.push(nums[i]);
          }
      }
      const q = rightArr.length + 1;
      if (q === k) {
          ans = mid;
          return;
      } else if (q > k) {
          quickSort(rightArr, k);
      } else {
          quickSort(leftArr, k - q);
      }
  };
  quickSort(nums, k);
  return ans;
};

// 时间复杂度：O(n),证明过程:《算法导论》9.2：期望为线性的选择算法
// 空间复杂度：O(logn)