var merge = function(nums1, m, nums2, n) {
    let i = nums1.length - 1
    m--
    n--
    while(n >= 0) {
        if(nums1[m] > nums2[n]) {
            nums1[i--] = nums1[m--]
        } else {
            nums1[i--] = nums2[n--]
        }
    }
};
// 时间复杂度：O(n)。
//空间复杂度：O(1)。