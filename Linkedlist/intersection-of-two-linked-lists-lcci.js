// https://leetcode.cn/problems/intersection-of-two-linked-lists-lcci/
// idea: https://programmercarl.com/%E9%9D%A2%E8%AF%95%E9%A2%9802.07.%E9%93%BE%E8%A1%A8%E7%9B%B8%E4%BA%A4.html#%E6%80%9D%E8%B7%AF
var getIntersectionNode = function(headA, headB) {
    let lengthA = 0
    let lengthB = 0
    let currA = headA
    let currB = headB
    let curr1 = headA
    let curr2 = headB
    while(currA) {
        lengthA++
        currA = currA.next
    }
    while(currB) {
        lengthB++
        currB = currB.next
    }
    if(lengthA >= lengthB) {
        let diff = lengthA - lengthB
        while(diff--) {
            curr1 = curr1.next
        }
        while(curr1) {
            if(curr1 == curr2) {
                return curr1
            }
            curr1 = curr1.next
            curr2 = curr2.next
        }
    }
    else {
        let diff = lengthB - lengthA
        while(diff--) {
            curr2 = curr2.next
        }
        while(curr2) {
            if(curr2 == curr1) {
                return curr2
            }
            curr1 = curr1.next
            curr2 = curr2.next
        }
    }
    return null
};