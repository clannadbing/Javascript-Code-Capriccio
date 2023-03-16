// https://leetcode.cn/problems/stone-game-ii/
var stoneGameII = function(piles) {
    let Nextsum = new Array(piles.length+1).fill(0)
    for (let i = Nextsum.length-2; i >= 0; i--) {
        Nextsum[i] = Nextsum[i+1] + piles[i]
    } 
    let dp = new Array(piles.length + 1)
    for (let i = 0; i < dp.length; i++) {
        dp[i] = []
    }
    var dfs = function(i, m) {
        if (i + 2*m >= piles.length) {
            return Nextsum[i]
        }
        let minstones = Infinity
        for (let x = 1; x <= 2*m; x++) {
            if (dp[i+x][Math.max(m, x)] != null) {
                minstones = Math.min(minstones, dp[i+x][Math.max(m, x)])
            }
            else {
                minstones = Math.min(minstones, dfs(i+x, Math.max(m, x)))
            }
        }
        dp[i][m] = Nextsum[i] - minstones
        return  dp[i][m]
    }
    return dfs(0, 1) 
};