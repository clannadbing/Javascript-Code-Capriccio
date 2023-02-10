// https://leetcode.cn/problems/linked-list-cycle-ii/
// idea: https://programmercarl.com/0142.%E7%8E%AF%E5%BD%A2%E9%93%BE%E8%A1%A8II.html#%E6%80%9D%E8%B7%AF
var detectCycle = function(head) {
    let slow = head
    let fast = head
    while(fast && fast.next){
        fast = fast.next.next
        slow = slow.next
        if(fast == slow){
            curr1 = head
            curr2 = fast
            while(curr1 != curr2){
                curr1 = curr1.next
                curr2 = curr2.next
            }
            return curr1
        }
    } 
    return null
};