// https://leetcode.cn/problems/number-of-1-bits/
var hammingWeight = function(n) {
    let res = 0
    while (n != 0) {
        n = n & (n-1)
        res++
    }
    return res
};