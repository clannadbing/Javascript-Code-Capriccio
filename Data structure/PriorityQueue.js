function PriorityQueue(){
    // 属性
    this.items = []
    function QueueElement(data, priority){
        this.data = data
        this.priority = priority
    }
    // 方法
    // enqueue(data, priority): 向队列尾部添加一个新的项
    PriorityQueue.prototype.enqueue = function(data, priority){
        var queueelement = new QueueElement(data, priority)
        if(this.items.length == 0){
            this.items.push(queueelement)
        }
        else{
            let added = false
            for(var i = 0; i < this.items.length; i++){
                if(queueelement.priority < this.items[i].priority){
                    this.items.splice(i, 0, queueelement)
                    added = true
                    break
                }
            }
            if(!added){
                this.items.push(queueelement)
            }
        }
    }
    // dequeue(): 移除队列中的第一项, 并返回被移除的元素
    PriorityQueue.prototype.dequeue = function(){
        return this.items.shift()
    }
    // front(): 返回队列中第一个元素, 队列不做任何变动
    PriorityQueue.prototype.front = function(){
        return this.items[0]
    }
    // isEmpty(): 如果栈里没有任何元素就返回true, 否则返回false
    PriorityQueue.prototype.isEmpty = function(){
        return this.items.length == 0
    }
    // size(): 返回栈里的元素个数
    PriorityQueue.prototype.size = function(){
        return this.items.length
    }
    // toString(): 将栈结构的内容以字符形式返回
    PriorityQueue.prototype.toString = function(){
        var str = ''
        for(var i = 0; i < this.items.length; i++){
            str += this.items[i].data + '-' + this.items[i].priority + ' '
        }
        return str
    }
}
// 测试
var priorityqueue = new PriorityQueue()
priorityqueue.enqueue(1, 1)
priorityqueue.enqueue(100, 100)
priorityqueue.enqueue(2, 2)
priorityqueue.enqueue(4, 4)
console.log(priorityqueue.toString())


