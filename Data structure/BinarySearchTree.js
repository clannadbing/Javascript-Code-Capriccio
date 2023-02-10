function BinarySearchTree() {
    // 创造节点构造函数
    function Node(key) {
        this.key = key
        this.left = null
        this.right = null
    }
    // 保存根的属性
    this.root = null
    // 二叉搜索树相关操作方法
    // 向树中插入一个新的节点
    BinarySearchTree.prototype.insert = function(key) {
        // 1. 根据key创建节点
        let newNode = new Node(key)
        // 2. 如果根节点不存在
        if(!this.root)  {
            this.root = newNode
        }
        // 3. 如果根节点存在
        else {
            this.insertNode(this.root, newNode)
        }
    }
    BinarySearchTree.prototype.insertNode = function(curr, newNode) {
        // 向左查找插入
        if(curr.key > newNode.key) {
            if(!curr.left) {
                curr.left = newNode
            }
            else {
                this.insertNode(curr.left, newNode)
            }
        }
        // 向右查找插入
        else {
            if(!curr.right) {
                curr.right = newNode
            }
            else {
                this.insertNode(curr.right, newNode)
            }
        }
    }
    // 在树中查找一个节点，如果节点存在，则返回true; 如果不存在, 则返回false
    BinarySearchTree.prototype.search = function(key) {
        // 1. 根节点不存在
        if(!this.root) {
            return false
        }
        // 2. 根节点存在
        let curr = this.root
        while(curr) {
            if(curr.key > key) {
                curr = curr.left
            }
            else if(curr.key == key) {
                return true
            }
            else {
                curr = curr.right
            }
        }
        return false
    }
    // 通过先序遍历的方式遍历所有节点
    BinarySearchTree.prototype.preOrderTraverse = function() {
        this.preOrderTraverseNode(this.root)
    }
    BinarySearchTree.prototype.preOrderTraverseNode = function(curr) {
        if(curr) {
            // 1. 处理经过的节点
            console.log(curr.key)
            // 2. 处理经过节点的左子节点
            this.preOrderTraverseNode(curr.left)
            // 3. 处理经过节点的右子节点
            this.preOrderTraverseNode(curr.right)    
        }
    }
    // 通过中序遍历的方式遍历所有节点
    BinarySearchTree.prototype.inOrderTraverse = function() {
        this.inOrderTraverseNode(this.root)
    }
    BinarySearchTree.prototype.inOrderTraverseNode = function(curr) {
        if(curr) {
            // 1. 处理经过节点的左子节点
            this.inOrderTraverseNode(curr.left)
            // 2. 处理经过的节点
            console.log(curr.key)
            // 3. 处理经过节点的右子节点
            this.inOrderTraverseNode(curr.right)
        }
    }
    // 通过后序遍历的方式遍历所有节点
    BinarySearchTree.prototype.postOrderTraverse = function() {
        this.postOrderTraverseNode(this.root)
    }
    BinarySearchTree.prototype.postOrderTraverseNode = function(curr) {
        if(curr) {
            // 1. 处理经过节点的左子节点 
            this.postOrderTraverseNode(curr.left)
            // 2. 处理经过节点的右子节点
            this.postOrderTraverseNode(curr.right)
            // 3. 处理经过的节点
            console.log(curr.key)
        }
    }
    // 返回树中最小的节点
    BinarySearchTree.prototype.min = function() {
        // 1. 根节点不存在
        if(!this.root) {
            return null
        }
        // 2. 根节点存在
        let curr = this.root
        while(curr.left) {
            curr = curr.left
        }
        return curr.key
    }
    // 返回树中最大的节点
    BinarySearchTree.prototype.max = function() {
        // 1. 根节点不存在
        if(!this.root) {
            return null
        }
        // 2. 根节点存在
        let curr = this.root
        while(curr.right) {
            curr = curr.right
        }
        return curr.key
    }
    // 从树中移除某个节点
    BinarySearchTree.prototype.remove = function(key) {
        // 1. 先找到要删除的节点, 如果没有找到, 不需要删除
        // 1.1 定义变量，保存信息
        let curr = this.root
        let parent = null
        let isLeftChild = true
        // 1.2根节点不存在的情况
        if(this.root == null) {
            return false
        }
        // 1.3根节点存在的情况
        while(curr.key != key) {
            parent = curr
            // 向左查找
            if(curr.key > key) {
                curr = curr.left
                isLeftChild = true
            }
            // 向右查找
            else {
                curr = curr.right
                isLeftChild = false
            }
            // 查找到最后, 未找到的情况
            if(curr == null) {
                return false
            }
        }
        // 2. 删除叶子节点
        if(curr.left == null && curr.right == null) {
            // 2.1 是根节点
            if(curr == this.root) {
                this.root = null
            }
            // 2.2 不是根节点
            else {
                // 2.2.1 叶子节点在左边
                if(isLeftChild) {
                    parent.left = null
                }
                // 2.2.2 叶子节点在右边
                else {
                    parent.right = null
                }
            }
        }
        // 3. 删除只有一个子节点的节点
        // 3.1 删除右边只有一个子节点的节点
        else if(curr.left == null) {
            // 3.1.1 是根节点
            if(curr == this.root) {
                this.root = curr.right
            }
            // 3.1.2 不是根节点, 节点在父节点左边
            else if(isLeftChild) {
                parent.left = curr.right
            }
            // 3.1.3 不是根节点, 节点在父节点右边
            else {
                parent.right = curr.right 
            }
        }
        // 3.2 删除左边只有一个子节点的节点
        else if(curr.right == null) {
            // 3.2.1 是根节点
            if(curr == this.root) {
                this.root = curr.left
            }
            // 3.2.2 不是根节点, 节点在父节点左边
            else if(isLeftChild) {
                parent.left = curr.left
            }
            // 3.2.3 不是根节点, 节点在父节点右边
            else {
                parent.right = curr.left
            }
        }
        // 4. 删除有两个子节点的节点
        else {
            // 4.1 获取后继节点
            let successor = this.getsuccessor(curr)
            // 4.2 判断是否根节点
            if(curr == this.root) {
                this.root = successor
            }
            else {
                if(isLeftChild) {
                    parent.left = successor
                }
                else {
                    parent.right = successor
                }
            }
            // 4.3 删除节点的左子树 = curr.left
            successor.left = curr.left
        }
        
    } 
    // 寻找后继节点的方法
    BinarySearchTree.prototype.getsuccessor = function(delNode) {
        // 1. 定义变量, 保存找到的后继
        let successor = delNode
        let curr = delNode.right
        let successorparent = null
        // 2. 循环查找
        while(curr) {
            successorparent = successor
            successor = curr
            curr = curr.left
        }
        // 3. 判断寻找到的后继节点是否直接就是delNode的right节点
        if(successor != delNode.right) {
            successorparent.left = successor.right
            successor.right = delNode.right
        }
        return successor
    }
}
// insert测试
let tree = new BinarySearchTree()
tree.insert(11)
tree.insert(7)
tree.insert(15)
tree.insert(5)
tree.insert(3)
tree.insert(9)
tree.insert(8)
tree.insert(10)
tree.insert(13)
tree.insert(12)
tree.insert(14)
tree.insert(20)
tree.insert(18)
tree.insert(25)
tree.insert(6)
// tree.preOrderTraverse()
// tree.inOrderTraverse()
// tree.postOrderTraverse()
// console.log(tree.min())
// console.log(tree.max())
// console.log(tree.search(25))
tree.remove(9)
tree.remove(7)
tree.remove(15)
tree.postOrderTraverse()