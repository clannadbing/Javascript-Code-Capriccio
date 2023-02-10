### 二叉树递归函数返回值总结
1. 带数值返回值
```
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
```
2. 带布朗返回值
```
var isSymmetric = function(root) {
    var DFS = function(left, right) {
        if (left == null && right != null) {
            return false
        }
        else if (left != null && right == null) {
            return false
        }
        else if (left == null && right == null) {
            return true
        }
        else if (left.val != right.val) {
            return false
        }
        let outside = DFS(left.left, right.right)
        let inside = DFS(left.right, right.left)
        let res = outside && inside
        return res
    }
    return DFS(root.left, root.right)
};
```
3. 带当前节点返回值
```
var lowestCommonAncestor = function(root, p, q) {
    if (root == null) {
        return null
    }
    if (root.val > p.val && root.val > q.val) {
        let left = lowestCommonAncestor(root.left, p, q)
        return left
    }
    if (root.val < p.val && root.val < q.val) {
        let right = lowestCommonAncestor(root.right, p, q)
        return right
    }
    return root
};
```
4. 带添加、删除节点返回值
```
var deleteNode = function(root, key) {
    // 第一种情况：没找到删除的节点，遍历到空节点直接返回了
    if (root == null) {
        return null
    }
    if (root.val == key) {
        // 第二种情况：左右孩子都为空（叶子节点），直接删除节点， 返回NULL为根节点
        if (root.left == null && root.right == null) {
            return null
        }
        // 第三种情况：其右孩子为空，左孩子不为空，删除节点，左孩子补位，返回左孩子为根节点
        else if (root.left != null && root.right == null) {
            return root.left
        }
        // 第四种情况：其左孩子为空，右孩子不为空，删除节点，右孩子补位 ，返回右孩子为根节点
        else if (root.left == null && root.right != null) {
            return root.right
        }
        // 第五种情况：左右孩子节点都不为空，则将删除节点的左子树放到删除节点的右子树的最左面节点的左孩子的位置, 并返回删除节点右孩子为新的根节点。
        else {
            let curr = root.right // 找右子树最左面的节点
            while (curr.left != null) {
                curr = curr.left
            }
            curr.left = root.left // 把要删除的节点（root）左子树放在cur的左孩子的位置
            return root.right
        } 
    }
    if (root.val > key) {
        root.left = deleteNode(root.left, key)
    }
    if (root.val < key) {
        root.right = deleteNode(root.right, key)
    }
    return root
};
```
5. 带公共祖先节点返回值
```
var lowestCommonAncestor = function(root, p, q) {
    if (root == null) {
        return root
    }
    if (root == p || root == q) {
        return root
    }
    let left = lowestCommonAncestor(root.left, p, q)
    let right = lowestCommonAncestor(root.right, p, q)
    if (left != null && right != null) {
        return root
    }  
    else if (left == null && right != null) {
        return right
    }
    else if (left != null && right == null) {
        return left
    }
    else {
        return null
    }
};
```