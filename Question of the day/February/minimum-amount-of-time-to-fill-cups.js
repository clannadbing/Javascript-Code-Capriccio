// https://leetcode.cn/problems/minimum-amount-of-time-to-fill-cups/
var fillCups = function(amount) {
    let res = 0
    amount = amount.sort(function(a, b){return a-b})
    while (amount[2] != 0) {
        if (amount[1] != 0) {
            amount[2] -= 1
            amount[1] -= 1
            res++
        }
        else {
            amount[2] -= 1
            res++
        }
        amount = amount.sort(function(a, b){return a-b})
    }
    return res
};