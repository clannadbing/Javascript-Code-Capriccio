// https://leetcode.cn/problems/balanced-binary-tree/
// 解法一：借用求二叉树最大深度函数求解
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

var isBalanced = function(root) {
    var DFS = function(curr) {
        if(curr == null) {
            return true
        }
        let leftheight = maxDepth(curr.left)
        let rightheight = maxDepth(curr.right)
        if(Math.abs(leftheight - rightheight) > 1) {
            return false
        }
        let left = DFS(curr.left)
        let right = DFS(curr.right)
        let res = left && right
        return res
    }
    return DFS(root)
};

// 解法二：借助二叉树最大深度思想
var isBalanced = function(root) {
    var DFS = function(curr) {
        if(curr == null) {
            return 0
        }
        let leftheight = DFS(curr.left)
        if(leftheight == -1) {
            return -1
        }
        let rightheight = DFS(curr.right)
        if(rightheight == -1) {
            return -1
        }
        if(Math.abs(leftheight - rightheight) > 1) {
            return -1
        }
        let res = 1 + Math.max(leftheight, rightheight)
        return res
    }
    return DFS(root) == -1 ? false : true
};