// https://leetcode.cn/problems/count-collisions-of-monkeys-on-a-polygon/
var monkeyMove = function(n) {
    let mod = BigInt(1e9+7)
    let x = 2n
    let res = 1n
    while (n != 0) {
        if (n&1){
            res = (res % mod) * (x % mod) % mod
        }
        x = (x % mod)*(x % mod)
        n = n >>> 1
    }
    res = (res - 2n + mod) % mod
    return res
};