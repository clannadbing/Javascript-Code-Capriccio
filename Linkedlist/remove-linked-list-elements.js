// https://leetcode.cn/problems/remove-linked-list-elements/
// 方法一：直接操作
var removeElements = function(head, val) {
    // 链表不存在
    if(head == null){
        return head
    }
    // 链表存在，删除首节点
    while(head.val == val){
        head = head.next
        if(head == null){
            return head
        }
    }
    // 链表存在，删除中间和结尾节点
    let curr = head
    let prve = null
    while(curr != null){
        if(curr.val == val){
            prve.next = curr.next
            curr = prve.next
        }
        else{
            prve = curr
            curr = curr.next
        }
    }
    return head
};

//方法二：设置dummy节点
var removeElements = function(head, val) {
    let dummy = new ListNode()
    dummy.next = head
    let curr = dummy.next
    let prve = dummy
    while(curr) {
        if(curr.val == val){
            prve.next = curr.next
            curr = prve.next
        }
        else{
            prve = curr
            curr = curr.next
        }
    }
    return dummy.next
};