// https://leetcode.cn/problems/delete-node-in-a-bst/
// idea: https://programmercarl.com/0450.%E5%88%A0%E9%99%A4%E4%BA%8C%E5%8F%89%E6%90%9C%E7%B4%A2%E6%A0%91%E4%B8%AD%E7%9A%84%E8%8A%82%E7%82%B9.html#%E9%80%92%E5%BD%92
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