// https://leetcode.cn/problems/merge-two-2d-arrays-by-summing-values/
var mergeArrays = function(nums1, nums2) {
    let i = 0
    let j = 0
    let res = []
    while (i != nums1.length  || j != nums2.length) {
        if (i == nums1.length) {
            res.push(nums2[j])
            j++
        }
        else if (j == nums2.length) {
            res.push(nums1[i])
            i++
        }
        else if (nums1[i][0] < nums2[j][0]) {
            res.push(nums1[i])
            i++
        }
        else if (nums1[i][0] > nums2[j][0]) {
            res.push(nums2[j])
            j++
        }
        else if (nums1[i][0] == nums2[j][0]) {
            nums1[i][1] += nums2[j][1]
            res.push(nums1[i])
            i++
            j++
        }
    }
    return res
};