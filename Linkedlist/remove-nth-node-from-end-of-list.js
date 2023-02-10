// https://leetcode.cn/problems/remove-nth-node-from-end-of-list/
// idea: https://programmercarl.com/0019.%E5%88%A0%E9%99%A4%E9%93%BE%E8%A1%A8%E7%9A%84%E5%80%92%E6%95%B0%E7%AC%ACN%E4%B8%AA%E8%8A%82%E7%82%B9.html#%E6%80%9D%E8%B7%AF
var removeNthFromEnd = function(head, n) {
    let curr = head
    let sum = 0
    while(curr) {
        sum++
        curr = curr.next
    }
    console.log(sum)
    if(n == sum) {
        head = head.next
    }
    else {
        let start = null
        let end = head
        let index = 0
        while(index != sum - n){
            start = end
            end = end.next
            index++
        } 
        start.next = end.next
    }
    return head
};
//快慢指针法
var removeNthFromEnd = function(head, n) {
    let dummy = new ListNode()
    dummy.next = head
    let slow = dummy
    let fast = dummy
    let index = 0
    while(fast){
        if(index < n+1){
            fast = fast.next
            index++
        }
        else{
            fast = fast.next
            slow = slow.next
        }
    }
    slow.next = slow.next.next
    return dummy.next
};