### 子序列问题
1. 连续子序列(子数组) vs 不连续子序列
    * longest-increasing-subsequence vs longest-continuous-increasing-subsequence(一位数组dp[i]定义：表示以坐标i结尾的最长连续(不连续)子序列长度为dp[i])
    * maximum-length-of-repeated-subarray vs longest-common-subsequence(uncrossed-lines)(二维数组dp[i][j]：表示num1以i-1结尾, nums2以j-1结尾的公共的 、长度最长的子数组(子序列)的长度为dp[i][j]; 递推公式：由nums1[i-1] == nums2[j-1]来进行推导、递推顺序：根据画方格图进行推导)
    * maximum-subarray(表示以i结尾的连续子数组最大和是dp[i])
2. 编辑距离系列(1、dp[i][j]含义：表示s以i-1结尾, t以j-1结尾... 2、初始化：根据实际意义 3、递推顺序：根据画方格图进行推导 4、由s[i-1] == t[j-1]、以及对应的删除和替换操作来进行推导)
    * is-subsequence(s序列中删除某些元素得到t序列)
    * distinct-subsequences(s序列中删除某些元素得到t序列的方案数)
    * delete-operation-for-two-strings(s序列、t序列删除某些元素得到相同序列最小操作数)
    * edit-distance(s序列、t序列删除\添加、替换某些元素得到相同序列最小操作数)
3. 回文系列
    * palindromic-substrings(表示下标区间[i, j](j >= i)这个字符串是否是回文子串dp[i][j]、res进行记录)
    * longest-palindromic-subsequence(表示下标区间[i, j](j >= i)这个字符串最长的回文子序列(子串)长度是dp[i][j])