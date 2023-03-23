var merge = function(intervals) {
    // 先进行排序 （区间第一个元素）从小到大
    const sortedIntervals = intervals.sort((a, b) => a[0] - b[0]);
    const result = [];
    // 取出第一个区间
    let current = sortedIntervals[0];
    for (let i = 1; i < sortedIntervals.length; i++) {
        // 循环比较后面的区间
        const interval = sortedIntervals[i];
        // 如果下一个区间的最小值 存在于当前比较的区间（小于当前区间的最大值） 则合并
        if (interval[0] <= current[1]) {
            // 合并取两个区间最大值的最大者
            current[1] = Math.max(current[1], interval[1]); // case 1
        } else {
            // 如果不在前一个区间内 说明当前区间与下一个区间不连续 则把当前区间添加到结果集
            result.push(current);
            // 更新比较的当前区间为下一个区间
            current = interval; // case 2
        }
    }
    // 遍历结束之后两种情况 
    // case 1 最后一个区间被合并，则需要将current添加到结果集
    // case 2 最后一个区间没有被合并，也需要将current添加到结果集
    result.push(current);
    return result;
};

// 时间复杂度O(nlogn)，其中 n 为区间的数量。除去排序的开销，我们只需要一次线性扫描，所以主要的时间开销是排序的 O(nlogn)
// 空间复杂度也就为O(logn)，其中 n 为区间的数量。这里计算的是存储答案之外，使用的额外空间。O(logn) 即为排序所需要的空间复杂度