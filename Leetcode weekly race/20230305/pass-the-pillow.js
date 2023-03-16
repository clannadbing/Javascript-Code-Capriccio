// https://leetcode.cn/problems/pass-the-pillow/
var passThePillow = function(n, time) {
    let nums = new Array(2*n-2)
    for (let i = 0; i < n; i++) {
        nums[i] = i + 1
    }
    k = nums[n-1]
    for (let i = n; i < 2*n-2; i++) {
        nums[i] = --k
    }
    res = nums[time % (2*n-2)]
    return res
};