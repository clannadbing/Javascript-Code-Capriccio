// https://leetcode.cn/problems/dice-roll-simulation/
// idea: https://leetcode.cn/problems/dice-roll-simulation/solution/jiao-ni-yi-bu-bu-si-kao-dong-tai-gui-hua-sje6/
var dieSimulator = function(n, rollMax) {
    let mod = 1e9 + 7
    let ans = 0
    let nums = new Array(n)
    for (let i = 0; i < nums.length; i++) {
        nums[i] = new Array(7)
        for (let j = 0; j < nums[i].length; j++) {
            nums[i][j] = new Array(15)
        }
    }
    var dfs = function(i, last, left) {
        let res = 0
        if (i == 0) {
            return 1
        }
        if (nums[i][last][left] != null) {
            return nums[i][last][left]
        }
        for (let j = 0; j < rollMax.length; j++) {
            if (j+1 == last && left) {
                res = (res % mod + dfs(i-1, last, left-1) % mod) % mod
            }
            else if (j+1 != last && rollMax[j]) {
                res = (res % mod + dfs(i-1, j+1, rollMax[j]-1) % mod) % mod
            }
        }
        nums[i][last][left] = res % mod
        return res % mod
    }
    for (let i = 0; i < rollMax.length; i++) {
        ans = (ans % mod + dfs(n-1, i+1, rollMax[i]-1) % mod) % mod
    }
    return ans % mod
};