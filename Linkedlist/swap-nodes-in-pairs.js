// https://leetcode.cn/problems/swap-nodes-in-pairs/
// idea: https://programmercarl.com/0024.%E4%B8%A4%E4%B8%A4%E4%BA%A4%E6%8D%A2%E9%93%BE%E8%A1%A8%E4%B8%AD%E7%9A%84%E8%8A%82%E7%82%B9.html#%E6%80%9D%E8%B7%AF
var detectCycle = function(head) {
    let slow = head
    let fast = head
    while(fast && fast.next && fast.next.next){
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