// https://leetcode.cn/problems/minimum-operations-to-reduce-an-integer-to-0/
var minOperations = function(n) {
    var dfs = function(n) {
        if ((n & (n-1)) == 0) { // 注：==的优先级是要比&优先级要高的
            return 1
        }
        let lowbit = n & (-n)
        let min = Math.min(dfs(n+lowbit), dfs(n-lowbit)) + 1
        return min
    }
    return dfs(n)
};