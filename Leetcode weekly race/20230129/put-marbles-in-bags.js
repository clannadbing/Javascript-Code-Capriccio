// https://leetcode.cn/problems/put-marbles-in-bags/
// idea: https://leetcode.cn/problems/put-marbles-in-bags/solution/by-wan-shi-liang-de-mang-fu-mwjh/
var putMarbles = function(weights, k) {
    let min = 0
    let max = 0
    for (let i = 0; i < weights.length - 1; i++) {
        weights[i] = weights[i] + weights[i+1]
    }
    weights.pop()
    weights.sort(function(a, b){return a-b})
    for (let i = 0; i < k-1; i++) {
        min = min + weights[i]
    }
    for (let i = weights.length - 1; i > weights.length - k; i--) {
        max = max + weights[i]
    }
    return max - min
};