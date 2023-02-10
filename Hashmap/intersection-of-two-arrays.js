// https://leetcode.cn/problems/intersection-of-two-arrays/
var intersection = function(nums1, nums2) {
    let map = new Map()
    let res = []
    for(let i = 0; i < nums1.length; i++) {
        if(!map.has(nums1[i])) {
            map.set(nums1[i], 1)
        }
    }
    for(let j = 0; j < nums2.length; j++) {
        if(map.has(nums2[j])){
            res.push(nums2[j])
            map.delete(nums2[j])
        }
    }
    return res
};