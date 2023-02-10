// https://leetcode.cn/problems/symmetric-tree/
// idea: https://programmercarl.com/0101.%E5%AF%B9%E7%A7%B0%E4%BA%8C%E5%8F%89%E6%A0%91.html#%E9%80%92%E5%BD%92%E6%B3%95
// 核心关键点：
// 1、对于二叉树是否对称，要比较的是根节点的左子树与右子树是不是相互翻转的，理解这一点就知道了其实我们要比较的是两个树（这两个树是根节点的左右子树），所以在递归遍历的过程中，也是要同时遍历两棵树
// 2、什么情况下使用后序遍历：收集左右孩子节点的信息返回给上一层, 使用return返回

// 后序遍历
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

// 迭代法
function Stack(){
    // 属性
    this.items = []
    // 方法
    // push(data): 添加一个新元素到栈顶位置
    Stack.prototype.push = function(data){
        this.items.push(data)
    }
    // pop(): 移除栈顶的元素，同时返回被移除的元素
    Stack.prototype.pop = function(){
        return this.items.pop()
    } 
    // peek(): 返回栈顶的元素，不对栈做任何修改(这个方法不会移除栈顶的元素，仅仅返回它)
    Stack.prototype.peek = function(){
        return this.items[this.items.length - 1]
    }
    // isEmpty(): 如果栈里没有任何元素就返回true, 否则返回false
    Stack.prototype.isEmpty = function(){
        return this.items.length == 0
    }
    // size(): 返回栈里的元素个数
    Stack.prototype.size = function(){
        return this.items.length
    }
    // toString(): 将栈结构的内容以字符形式返回
    Stack.prototype.toString = function(){
        var str = ''
        for(var i = 0; i < this.items.length; i++){
            str += this.items[i] +' ' 
        }
        return str
    }
}

var isSymmetric = function(root) {
    let stack = new Stack()
    stack.push(root.left)
    stack.push(root.right)
    while(!stack.isEmpty()) {
        let right = stack.pop()
        let left = stack.pop()
        if(right == null && left == null) {
            continue
        }
        if (right == null || left == null || right.val != left.val) {
            return false
        }
        stack.push(left.left)
        stack.push(right.right)
        stack.push(left.right)
        stack.push(right.left)
    }
    return true
};
