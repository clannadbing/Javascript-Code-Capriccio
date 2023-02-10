// https://leetcode.cn/problems/construct-binary-tree-from-preorder-and-inorder-traversal/
// idea: https://programmercarl.com/0106.%E4%BB%8E%E4%B8%AD%E5%BA%8F%E4%B8%8E%E5%90%8E%E5%BA%8F%E9%81%8D%E5%8E%86%E5%BA%8F%E5%88%97%E6%9E%84%E9%80%A0%E4%BA%8C%E5%8F%89%E6%A0%91.html#%E6%80%9D%E8%B7%AF
var buildTree = function(preorder, inorder) {
    if (preorder.length == 0) {
        return null
    }
    let root = new TreeNode(preorder[0])
    if (preorder.length == 1) {
        return root
    }
    let index = 0
    for(let i = 0; i < inorder.length; i++) {
        if (inorder[i] == root.val) {
            index = i
            break
        }
    }
    let leftinorder = inorder.slice(0, index)
    let rightinorder = inorder.slice(index+1, inorder.length)
    let leftpreorder = preorder.slice(1, leftinorder.length+1)
    let rightpreorder = preorder.slice(leftinorder.length+1, preorder.length)
    root.left = buildTree(leftpreorder, leftinorder)
    root.right = buildTree(rightpreorder, rightinorder)
    return root
};