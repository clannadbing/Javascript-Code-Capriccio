// https://leetcode.cn/problems/house-robber-iii/
// 方案一：记忆化递归：在递归函数前面使用一个来保存遍历过的节点值
var rob = function(root) {
    // 记忆化递归
    var map = new Map()
    var DFS = function(root) {
        if (root == null) {
            return 0
        }
        if (map.has(root)) {
            return map.get(root)
        }
        // 考虑节点被偷
        let val1 = root.val
        if (root.left) {
            val1 = val1 + rob(root.left.left) + rob(root.left.right)
        }
        if (root.right) {
            val1 = val1+ rob(root.right.left) + rob(root.right.right)
        }
        // 考虑节点不被偷
        let val2 = rob(root.left) + rob(root.right)
        map.set(root, Math.max(val1, val2))
        return Math.max(val1, val2)
    }
    return DFS(root)
};
// 方案二：树形dp
var rob = function(root) {
    // dp[0] --> 表示选择节点获取的最高金额, dp[1] --> 表示不选择节点获取的最高金额 
    var DFS = function(root) {
        if (root == null) {
            return [0, 0]
        }
        let left = DFS(root.left)
        let right = DFS(root.right)
        // 考虑当前节点
        let val1 = root.val + left[1] + right[1]
        // 不考虑当前节点
        let val2 = Math.max(left[0], left[1]) + Math.max(right[0], right[1])
        return [val1, val2]
    }
    let res = DFS(root)
    return Math.max(...res)
};