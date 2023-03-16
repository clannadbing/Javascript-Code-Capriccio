// https://leetcode.cn/problems/check-if-it-is-a-good-array/
var isGoodArray = function(nums) {
    //1. 设置初始最大公因数 
    let factor = nums[0]
    //2. 辗转相除计算两数最大公因数
    var gcd = function(nums1, nums2) {
        while(nums2 != 0) {
            let temp = nums1
            nums1 = nums2
            nums2 = temp % nums2 
        }
        return nums1
    }
    // 3. 遍历整个数组
    for (let i = 0; i < nums.length; i++) {
        factor = gcd(factor, nums[i])
        if (factor == 1) {
            return true
        }
    }
    return false
};