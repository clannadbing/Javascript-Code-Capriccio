var squareFreeSubsets = function(nums) {
    let Prime = [2,3,5,7,11,13,17,19,23,29] // 给出小于等于 30 的质数集合
    let NSQ = new Array(31).fill(0) // NSQ 表示整数 i 的质因数集合
    // 对于每个整数，将其质因数集合用二进制表示出来
    // NSQ[i] 的二进制第 j 位为 1 表示 i 可以被 PRIMES[j] 整除
    // NSQ[i] 的值为 -1 表示 i 存在平方因子
    for (let i = 2; i < NSQ.length; i++){
        for (let j = 0; j < Prime.length; j++) {
            if (i % Prime[j] == 0) {
                if (i % (Prime[j]*Prime[j]) == 0) {
                    NSQ[i] = -1
                    break
                }   
                NSQ[i] = NSQ[i] | (1 << j)            
            }
        }
    }
    let mod = 1e9 + 7 // 取模数
    let M = (1 << Prime.length) - 1 // 用二进制表示质因数集合的最大值
    // dp[i][j] 表示选择前 i 个物品且质因数集合为 j 的无平方非空子集的个数
    let dp = new Array(nums.length + 1)
    for (let i = 0; i < dp.length; i++) {
        dp[i] = new Array(M+1).fill(0) 
    }
    for (let i = 0; i< dp[0].length; i++) {
        dp[0][0] = 1
    }
    for (let i = 1; i <= nums.length; i++) { // 计算当前数的质因数集合，当当前数不包含平方因子时才进行更新
        for (let j = 0; j < M+1; j++) {
            dp[i][j] = dp[i-1][j] % mod
            if (NSQ[nums[i-1]] < 0) {
                continue
            }
            if ((j | NSQ[nums[i-1]]) == j) { // 如果 j 包含 NSQ[nums[i]] 的质因数集合，则可以更新 dp[j]
                dp[i][j] = dp[i-1][j] % mod + dp[i-1][j^NSQ[nums[i-1]]] % mod // 更新 dp[i][j]
                // j^NSQ[nums[i]] 表示将 j 的质因数集合与 NSQ[nums[i]] 的质因数集合取异或，得到剩余的质因数集合
                // dp[mask ^ j] 表示质因数集合为 mask ^ j 的无平方非空子集的个数
            }
        }
    }
    let sum = 0
    for (let i = 0; i < dp[0].length; i++) {
        sum = sum % mod + dp[nums.length][i] % mod
    }
    // dp数组中的所有值加起来就是无平方非空子集的总数，因为空集不算，所以要减去 1
    return (sum - 1 + mod) % mod //避免出现sum = 1e9+7 而出现大数越界问题
};
console.log(squareFreeSubsets([3,4,4,5]))