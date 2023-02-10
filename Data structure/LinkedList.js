//封装链表
function LinkedList(){
    // 内部的类：节点类
    function Node(data){
        this.data = data
        this.next = null
    }
    // 属性
    this.head = null
    this.length = 0
    // append(data)方法：向链表尾部添加一个新的项
    LinkedList.prototype.append = function(data){
        // 1.创建新的节点
        var newNode = new Node(data)
        // 2.判断是否添加的是第一个节点
        if(this.length == 0){ // 2.1是第一个节点
            this.head = newNode
        }
        else{                 // 2.2不是第一个节点
            var curr = this.head
            while(curr.next){
                curr = curr.next
            }
            curr.next = newNode
        }
        this.length++
    }
    // toString()方法：输出链表中元素的值
    LinkedList.prototype.toString = function(){
        // 1.定义变量
        var str = ''
        var curr = this.head
        // 2.循环获取一个个的节点
        while(curr){
            str += curr.data + ' ' 
            curr = curr.next
        }
        return str
    }
    // insert(position, data)方法：向链表的特定位置插入一个新的项
    LinkedList.prototype.insert = function(position, data){
        // 1.创建新节点
        var newNode = new Node(data)
        // 2.越界判断
        if(position < 0 || position > this.length){
            return false
        }
        // 3.判断插入的位置是否是第一个
        if(position == 0){
            newNode.next = this.head
            this.head = newNode
        }
        else{
            var prve = null
            var curr = this.head
            var index = 0
            while(index++ < position){
                prve = curr
                curr = curr.next
            }
            newNode.next = curr
            prve.next = newNode
        }
        // 4.length+1
        this.length++
    }
    // update(position, data)方法：修改某个位置的元素
    LinkedList.prototype.update = function(position, data){
        // 1.越界判断
        if(position < 0 || position >= this.length){
            return false
        }
        // 2.获取对应data
        var curr = this.head
        var index = 0
        while(index++ < position){
            curr = curr.next
        }
        curr.data = data
    }
    // get(position)方法：获取对应位置的元素
    LinkedList.prototype.get = function(position){
        // 1.越界判断
        if(position < 0 || position >= this.length){
            return false
        }
        // 2.获取position对应元素
        var curr = this.head
        var index = 0
        while(index++ < position){
            curr = curr.next
        }
        return curr.data
    }
    // indexOf(data)方法：返回元素在链表中的索引，如果链表中没有该元素则返回-1
    LinkedList.prototype.indexOf = function(data){
        // 1.定义变量
        var curr = this.head
        var index = 0
        // 2.开始查找
        while(index++ < this.length){
            if(curr.data == data){
                return index - 1
            }
            curr = curr.next
        }
        // 3.找到最后没有找到，返回-1
        return -1
    }
    // removeAt(position)方法：从链表的特定位置移除一项
    LinkedList.prototype.removeAt = function(position){
        // 1.判断是否越界
        if(position < 0 || position >= this.length){
            return false
        }
        var prve = null
        var curr = this.head
        var index = 0
        // 2.判断是否删除的是第一个节点
        if(position == 0){
            this.head = this.head.next
        }
        else{
            while(index++ < position){
                prve = curr
                curr = curr.next
            }
            prve.next = curr.next
        }
        // 3.length-1
        this.length--
    } 
    // remove(data)方法：从链表中移除一项
    LinkedList.prototype.remove = function(data){
        var curr = this.head
        var index = 0
        while(index++ < this.length){
            if(curr.data == data){
                this.removeAt(index-1)
            }
            curr = curr.next
        }
        return -1
    }
    // size()方法：返回链表中包含元素的个数
    LinkedList.prototype.size = function(){
        return this.length
    }
    // isEmpyt()方法：如果链表中不包含任何元素，返回true，链表长度大于0则返回false
    LinkedList.prototype.isEmpyt = function(){
        if(this.length == 0){
            return true
        }
        return false
    }
}
// 测试
var linkedlist = new LinkedList()
linkedlist.append('abc')
linkedlist.append('bcd')
linkedlist.append('cde')
console.log(linkedlist.toString())
linkedlist.insert(0, 'aaa')
linkedlist.insert(3, 'bbb')
linkedlist.insert(5, 'ccc')
console.log(linkedlist.toString())
linkedlist.update(5,'ddd')
console.log(linkedlist.toString())
console.log(linkedlist.get(4))
console.log(linkedlist.indexOf('ddd'))
linkedlist.removeAt(3)
console.log(linkedlist.toString())
linkedlist.remove('cde')
console.log(linkedlist.toString())
console.log(linkedlist.size())
console.log(linkedlist.head)
