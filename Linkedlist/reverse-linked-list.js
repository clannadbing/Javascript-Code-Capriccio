// https://leetcode.cn/problems/reverse-linked-list/
// idea: https://programmercarl.com/0206.%E7%BF%BB%E8%BD%AC%E9%93%BE%E8%A1%A8.html#%E9%80%92%E5%BD%92%E6%B3%95
 //方法一: 暴力求解
var reverseList = function(head) {
    let res = []
    let i = 0
    let curr1 = head
    let curr2 = head
    while(curr1) {
        res.push(curr1.val)
        curr1 = curr1.next
    }
    res = res.reverse()
    while(curr2) {
        curr2.val = res[i++]
        curr2 = curr2.next 
    }
    return head
};
//方法二: 双指针
var reverseList = function(head) {
    let temp = null
    let prve = null
    let curr = head
    while(curr){
        temp = curr.next
        curr.next = prve
        prve = curr
        curr = temp
    }
    return prve
};