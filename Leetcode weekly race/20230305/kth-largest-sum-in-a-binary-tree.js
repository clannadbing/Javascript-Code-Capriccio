// https://leetcode.cn/problems/kth-largest-sum-in-a-binary-tree/
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
var kthLargestLevelSum = function(root, k) {
    let queue = new Queue()
    let nums = [] 
    queue.enqueue(root)
    while(queue.size() != 0) {
        let len = queue.size()
        let sum = 0
        for (i = 0; i < len; i++) {
            let curr = queue.dequeue()
            sum += curr.val
            if (curr.left) {
                queue.enqueue(curr.left)
            }
            if (curr.right) {
                queue.enqueue(curr.right)
            }
        }
        nums.push(sum)
    }
    nums.sort(function(a, b){return b-a})
    if (nums.length < k) {
        return -1
    }
    return nums[k-1]
};