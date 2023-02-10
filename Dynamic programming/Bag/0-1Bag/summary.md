### 0-1背包题型总结
1. dp[i][j]含义：物品[0,i]不重复任取多个, 背包容量为j, 最大价值为dp[i][j] --> dp[i][j] = Math.max(dp[i-1][j], dp[i-1][j-weight[i]]+value[i])
   * partition-equal-subset-sum
   * last-stone-weight-ii
2. dp[i][j]含义：物品[0,i]不重复任取多个, 背包容量为j, 装满背包j的方案数量dp[i][j] --> dp[i][j] = dp[i-1][j] + dp[i-1][j-weight[i]]
   * target-sum
3. dp[str][i][j]含义：物品[0,str]不重复任取多个, 二维背包容量为i, j, 背包所能装下的最多物品数量dp[str][i][j] --> dp[str][i][j] = Math.max(dp[str-1][i][j], dp[str-1][i-x][j-y] + 1)(x = str.weight[0], y = str.weight[1])
   * ones-and-zeroes