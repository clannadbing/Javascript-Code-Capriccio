// https://leetcode.cn/problems/powx-n/
var myPow = function(x, n) {
    if (x == 0) {
        return 0
    }
    let res = 1
    if (n < 0) {
        n = -n
        x = 1/x
    }
    while (n != 0) {
        if (n & 1) {
            res = res * x
        } 
        x = x*x
        n = n >>> 1 // 进行无符号右移1位，此处不能使用有符号右移（>>）
    }
    return res
};