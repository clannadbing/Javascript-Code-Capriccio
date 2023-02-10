// https://leetcode.cn/problems/reverse-string-ii/
// idea: https://programmercarl.com/0541.%E5%8F%8D%E8%BD%AC%E5%AD%97%E7%AC%A6%E4%B8%B2II.html
var reverseStr = function(s, k) {
    s = s.split('')
    let n = Math.floor(s.length / (2*k))
    let m = s.length % (2*k)
    while(n > 0) {
        let left = (n-1)*2*k
        let right = (n-1)*2*k + k - 1
        while(left < right) {
            let temp = s[left]
            s[left] = s[right]
            s[right] = temp
            left++
            right--
        }
        n--
    }
    n = Math.floor(s.length / (2*k))  
    if(m <= k) {
        let left = n*2*k
        let right = n*2*k + m - 1
        while(left < right) {
            let temp = s[left]
            s[left] = s[right]
            s[right] = temp
            left++
            right--
        }
    }
    else {
        let left = n*2*k
        let right = n*2*k + k - 1
        while(left < right) {
            let temp = s[left]
            s[left] = s[right]
            s[right] = temp
            left++
            right--
        }
    }
    s = s.join('')
    return s
};