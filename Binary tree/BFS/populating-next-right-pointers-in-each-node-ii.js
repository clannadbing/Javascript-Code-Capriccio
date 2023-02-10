// https://leetcode.cn/problems/populating-next-right-pointers-in-each-node-ii/
function Queue(){
    // 属性
    this.items = []
    // 方法
    // enqueue(data): 向队列尾部添加一个新的项
    Queue.prototype.enqueue = function(data){
        this.items.push(data)
    }
    // dequeue(): 移除队列中的第一项, 并返回被移除的元素
    Queue.prototype.dequeue = function(){
        return this.items.shift()
    }
    // front(): 返回队列中第一个元素, 队列不做任何变动
    Queue.prototype.front = function(){
        return this.items[0]
    }
    // isEmpty(): 如果队列没有任何元素就返回true, 否则返回false
    Queue.prototype.isEmpty = function(){
        return this.items.length == 0
    }
    // size(): 返回队列的元素个数
    Queue.prototype.size = function(){
        return this.items.length
    }
    // toString(): 将队列结构的内容以字符形式返回
    Queue.prototype.toString = function(){
        var str = ''
        for(var i = 0; i < this.items.length; i++){
            str += this.items[i] +' ' 
        }
        return str
    }
}

var connect = function(root) {
    let queue = new Queue()
    if (!root) {
        return root
    }
    queue.enqueue(root)
    while (!queue.isEmpty()) {
        let size = queue.size()
        let temp = queue.size()
        let prve = null
        let curr = null
        while (size--) { // size先判断再减1，均在while循环第一行代码中完成
            if (size + 1 == temp) {
                curr = queue.dequeue()
                prve = curr
            }
            else {
                curr = queue.dequeue()
                prve.next = curr
                prve = prve.next
            }
            if (curr.left) {
                queue.enqueue(curr.left)
            } 
            if (curr.right) {
                queue.enqueue(curr.right)
            }
            prve.next = null
        }
    }
    return root
};