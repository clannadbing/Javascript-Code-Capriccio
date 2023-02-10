// https://leetcode.cn/problems/top-k-frequent-elements/
// idea: https://programmercarl.com/0347.%E5%89%8DK%E4%B8%AA%E9%AB%98%E9%A2%91%E5%85%83%E7%B4%A0.html
// 小顶堆
var Heap = function() {
    this.items = []
    Heap.prototype.push = function(data) {
        // 1.推入元素
        this.items.push(data)
        // 2.获取推入元素和其父节点的下标
        let index = this.items.length - 1
        let parent = Math.floor((index-1) / 2)
        // 3.若推入元素的父节点存在, 且满足父节点值大于推入元素
        while(parent >= 0 && this.compare(parent, index)) {
            // 3.1 交换推入元素和父节点的位置
            let temp = this.items[parent]
            this.items[parent] = data
            this.items[index] = temp
            // 3.2 推入元素索引前移, 父节点索引前移(更新操作)
            index = parent
            parent = Math.floor((index-1) / 2)
        }
    }
    Heap.prototype.pop = function() {
        if(this.items.length == 0) {
            return null
        }
        else if(this.items.length == 1) {
            return this.items.pop()
        }
        else {
            // 1.获取堆顶元素
            let out = this.items[0]
            // 2.最后一个节点元素取代堆顶
            this.items[0] = this.items.pop()
            // 3.获堆顶对应的左右孩子节点，并分别比较两者的大小
            let index = 0
            let leftchild = 2*index + 1
            let rightchild = 2*index + 2
            let child = this.compare(leftchild, rightchild) ? rightchild : leftchild
            // 4.孩子节点存在，且满足父节点值大于孩子节点值
            while(child != undefined && this.compare(index, child)) {
                // 4.1 交换父节点和孩子节点的位置
                let temp = this.items[index]
                this.items[index] =  this.items[child]
                this.items[child] = temp
                // 4.2 父节点、子节点索引前移(更新操作)
                index = child
                leftchild = 2*index + 1
                rightchild = 2*index + 2
                child = this.compare(leftchild, rightchild) ? rightchild : leftchild
            }
            return out
        }
    }
    Heap.prototype.compare = function(parent, child) {
        // 1.针对pop操作, 左孩子节点不存在
        if(this.items[parent] == undefined) {
            return true
        }
        // 2.针对pop操作, 右孩子节点不存在或者父节点存在，孩子节点不存在
        if(this.items[child] == undefined) {
            return false
        }
        // 3.两者都存在的情况
        if(this.items[parent][1] > this.items[child][1]) {
            return true
        }
        return false
    }
    Heap.prototype.size = function() {
        return this.items.length
    }
}
var topKFrequent = function(nums, k) {
    let res = []
    var heap = new Heap()
    var map = new Map()
    for(let i = 0; i < nums.length; i++) {
        if(!map.has(nums[i])) {
            map.set(nums[i], 1)
        }
        else {
            map.set(nums[i], map.get(nums[i])+1)
        }
    }
    for(let i of map) {
        heap.push(i)
        if(heap.size() > k) {
            heap.pop()
        }
    }
    for(let i = heap.size() - 1; i >= 0; i--) {
        res.push(heap.pop()[0])
    }
    return res
};