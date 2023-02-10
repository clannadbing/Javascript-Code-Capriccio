// https://leetcode.cn/problems/next-greater-element-i/
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
var nextGreaterElement = function(nums1, nums2) {
    let stack = new Stack()
    let res1 = []
    let res2 = new Array(nums2.length)
    for(let i = nums2.length - 1; i >= 0; i--) {
        while(stack.size() != 0 && stack.peek() <= nums2[i]) {
            stack.pop()
        }
        res2[i] = stack.size() == 0 ? -1 : stack.peek()
        stack.push(nums2[i])
    } 
    for(let i = 0; i < nums1.length; i++) {
        for(let j = 0; j < nums2.length; j++) {
            if(nums1[i] == nums2[j]) {
                res1.push(res2[j])
                break
            }
        }
    }
    return res1
};