// 单调队列
function MonoQueue(){
    // 属性
    this.items = []
    // 方法
    // enqueue(data): 向队列尾部添加一个新的元素，如果这个元素大于队列尾部元素，则弹出队列尾部元素，直到这个元素不大于队列尾部元素或者成为队列的首个元素
    MonoQueue.prototype.enqueue = function(data){
        while(this.items.length != 0 && this.items[this.items.length-1] < data) {
            this.items.pop()
        }
        this.items.push(data)
    }
    // dequeue(data): 移除队列中指定的元素
    MonoQueue.prototype.dequeue = function(data){
        if(data == this.front()) {
            this.items.shift()
        }
    }
    // front(): 返回队列中第一个元素, 队列不做任何变动
    MonoQueue.prototype.front = function(){
        return this.items[0]
    }
}