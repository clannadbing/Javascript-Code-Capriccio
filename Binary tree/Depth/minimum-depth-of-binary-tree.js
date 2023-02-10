// https://leetcode.cn/problems/minimum-depth-of-binary-tree/
// idea: https://programmercarl.com/0111.%E4%BA%8C%E5%8F%89%E6%A0%91%E7%9A%84%E6%9C%80%E5%B0%8F%E6%B7%B1%E5%BA%A6.html
// 核心关键点：求二叉树的最小深度和求二叉树的最大深度的差别主要在于处理左右孩子不为空的逻辑
var minDepth = function(root) {
    var DFS = function(curr) {
        if(curr == null) {
            return 0
        }
        let leftdepth = DFS(curr.left)
        let rightdepth = DFS(curr.right)
        // 当一个左子树为空，右不为空，这时并不是最低点
        if(curr.left == null && curr.right != null) {
            return 1 + rightdepth
        }
        // 当一个右子树为空，左不为空，这时并不是最低点
        if(curr.right == null && curr.left != null) {
            return 1 + leftdepth
        }
        let height = 1 + Math.min(leftdepth, rightdepth)
        return height
    }
    return DFS(root)
};