### 1.先序遍历求二叉树深度vs后序遍历求二叉树高度
1. 先序遍历求二叉树深度(回溯思想)
   ```
   var maxDepth = function(root) {
    if(root == null) { 
        return root
    }
    let maxDepth = -Infinity
    var DFS = function(curr, depth) {
        maxDepth = Math.max(maxDepth, depth)
        if (curr.left == null && curr.right == null) {  // 到叶子节点结束
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
    DFS(root, 1)  // 自顶向下,depth设置为1
    return maxDepth
    };
2. 后序遍历求二叉树高度
   ```
   var maxDepth = function(root) {
    var DFS = function(curr) {
        if (curr == null) {  // 到空节点结束
            return 0
        }
        let leftdepth = DFS(curr.left)
        let rightdepth = DFS(curr.right)
        let depth = 1 + Math.max(leftdepth, rightdepth)
        return depth 
    }
    return DFS(root) // 自底向上
    };
### 2.递归函数什么时候需要返回值？什么时候不需要返回值？
1. 如果需要搜索整棵二叉树且不用处理递归返回值，递归函数就不要返回值(path-sum-ii)
   ```
   var pathSum = function(root, targetSum) {
    let res = []
    let path = []
    if(root == null) {
        return res
    }
    var DFS = function(curr, sum, targetSum) {
        path.push(curr.val)  // 中
        if (curr.left == null && curr.right == null) {
            if (sum == targetSum) {
                res.push(path.slice())
                return
            }
            return 
        }
        if (curr.left) {  // 左
            sum = sum + curr.left.val  // 
            DFS(curr.left, sum, targetSum)
            sum = sum - curr.left.val  // 回溯
            path.pop()  // 回溯
        }
        if (curr.right) {  // 右
            sum = sum + curr.right.val
            DFS(curr.right, sum, targetSum)
            sum = sum - curr.right.val  // 回溯
            path.pop()  // 回溯
        }
    }
    DFS(root, root.val, targetSum) // 传入root的val
    return res
    };
2. 如果要搜索其中一条符合条件的路径，那么递归一定需要返回值，因为遇到符合条件的路径了就要及时返回(path-sum)
   ```
   // 遇到符合条件的路径即返回 -- 搜索其中一条符合条件的路径，那么递归一定需要返回值
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

    // 通过&&或者||操作 -- 搜索整棵二叉树且需要处理递归返回值
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