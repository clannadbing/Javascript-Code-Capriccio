// https://leetcode.cn/problems/path-sum/
// idea: https://programmercarl.com/0112.%E8%B7%AF%E5%BE%84%E6%80%BB%E5%92%8C.html
// 核心关键点：递归函数需要返回值
// 方法一:遇到符合条件的路径即返回 -- 搜索其中一条符合条件的路径，那么递归一定需要返回值
var hasPathSum = function(root, targetSum) {
    if (root == null) {
        return false
    }
    var DFS = function(curr, sum, targetSum) {
        if (curr.left == null && curr.right == null && sum == targetSum) {
            return true
        }
        if (curr.left == null && curr.right == null && sum != targetSum) {
            return false
        }
        if (curr.left) {
            sum = sum + curr.left.val // 加上当前节点左子树的值
            if (DFS(curr.left, sum, targetSum)) {
                return true
            }
            sum = sum - curr.left.val
        }
        if (curr.right) {
            sum = sum + curr.right.val // 加上当前节点右子树的值
            if (DFS(curr.right, sum, targetSum)) {
                return true
            }
            sum = sum - curr.right.val
        }
        return false
    }
    return DFS(root, root.val, targetSum) // 传入节点的val
};

// 方法二： 通过&&或者||操作 -- 搜索整棵二叉树且需要处理递归返回值
var hasPathSum = function(root, targetSum) {
    let res = false
    if (root == null) {
        return res
    }
    var DFS = function(curr, sum, targetSum) {
        if (curr.left == null && curr.right == null) {
            if(sum == targetSum) {
                res = res || true
            } 
            return res
        }
        if (curr.left) {
            sum = sum + curr.left.val
            DFS(curr.left, sum, targetSum)
            sum = sum - curr.left.val
        }
        if (curr.right) {
            sum = sum + curr.right.val
            DFS(curr.right, sum, targetSum)
            sum = sum - curr.right.val
        }
        return res
    }
    return DFS(root, root.val, targetSum)
};