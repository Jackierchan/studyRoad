//给你一个整数数组 nums 和一个整数 k ，判断数组中是否存在两个 不同的索引 i 和 j ，满足 nums[i] == nums[j] 且 abs(i - j) <= k 。如果存在，返回 true ；否则，返回 false 。

var containsNearbyDuplicate = function(nums, k) {
    let map = new Map()
    for(let i = 0;i<nums.length;i++){
        if(map.has(nums[i])&&i-map.get(nums[i])<=k){
            return true
        }
        map.set(nums[i],i)
    }
    return false
};
// 时间复杂度O(n)，其中n是数组 nums 的长度。需要遍历数组一次，对于每个元素，哈希表的操作时间都是 O(1)
// 空间复杂度也就为 O(n)，其中n是数组 nums 的长度。需要使用哈希表记录每个元素的最大下标，哈希表中的元素个数不会超过n