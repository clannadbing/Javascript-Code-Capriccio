// https://leetcode.cn/problems/4sum-ii/
var fourSumCount = function(nums1, nums2, nums3, nums4) {
    let map = new Map()
    let sum1 = []
    let sum2 = []
    let res = 0
    for(let i = 0; i < nums1.length; i++) {
        for(let j = 0; j < nums2.length; j++) {
            sum1 = nums1[i] + nums2[j]
            if(!map.has(sum1)) {
                map.set(sum1, 1)
            }
            else {
                map.set(sum1, map.get(sum1)+1)
            }
        }
    }
    for(let i = 0; i < nums3.length; i++) {
        for(let j = 0; j < nums4.length; j++) {
            sum2 = nums3[i] + nums4[j]
            if(map.has(-sum2)) {
                res = res + map.get(-sum2)
            }
        }
    }
    return res
};