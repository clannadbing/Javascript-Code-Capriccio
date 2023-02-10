// https://leetcode.cn/problems/maximum-depth-of-binary-tree/
// idea: https://programmercarl.com/0104.%E4%BA%8C%E5%8F%89%E6%A0%91%E7%9A%84%E6%9C%80%E5%A4%A7%E6%B7%B1%E5%BA%A6.html#%E9%80%92%E5%BD%92%E6%B3%95
// 区分：二叉树的高度与深度
// 1. 二叉树节点的深度：指从根节点到该节点的最长简单路径边的条数或者节点数（取决于深度从0开始还是从1开始）
// 2. 二叉树节点的高度：指从该节点到叶子节点的最长简单路径边的条数后者节点数（取决于高度从0开始还是从1开始）
// 3. 根节点的高度就是二叉树的最大深度

// 后序遍历
var maxDepth = function(root) {
    var DFS = function(curr) {
        if (curr == null) {
            return 0
        }
        let leftdepth = DFS(curr.left)
        let rightdepth = DFS(curr.right)
        let depth = 1 + Math.max(leftdepth, rightdepth)
        return depth
    }
    return DFS(root)
};

// 先序遍历
var maxDepth = function(root) {
    if(root == null) {
        return root
    }
    let maxDepth = -Infinity
    var DFS = function(curr, depth) {
        maxDepth = Math.max(maxDepth, depth)
        if (curr.left == null && curr.right == null) {
            return 
        }
        if(curr.left) {
            depth++
            DFS(curr.left, depth)
            depth--
        }
        if(curr.right) {
            depth++
            DFS(curr.right, depth)
            depth--
        }
    }
    DFS(root, 1)
    return maxDepth
};