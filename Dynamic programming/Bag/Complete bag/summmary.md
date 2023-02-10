### 完全背包题型总结
1. 组合or排列
   * 组合：先物品, 再背包
        coin-change-ii
        coin-change
   * 排列: 先背包, 再物品
        combination-sum-iv
        climbing-stairs
        perfect-squares
2. 题型
   * 问背包装满最大价值：dp[j] = max(dp[j], dp[j - weight[i]] + value[i])
        complete bag theory
   * 问装满背包有几种方法：dp[j] = dp[j] + dp[j - nums[i]]
        coin-change-ii
        combination-sum-iv
        climbing-stairs
   * 问装满背包所有物品的最小个数: dp[j] = min(dp[j - coins[i]] + 1, dp[j])
        coin-change
        perfect-squares
3. 单词拆分
