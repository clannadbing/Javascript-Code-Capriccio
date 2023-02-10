// https://leetcode.cn/problems/repeated-substring-pattern/
// idea: https://programmercarl.com/0459.%E9%87%8D%E5%A4%8D%E7%9A%84%E5%AD%90%E5%AD%97%E7%AC%A6%E4%B8%B2.html
var repeatedSubstringPattern = function(s) {
    // KMP
    let next = new Array(s.length)
    var getNext = function(next, s) {
        j = 0
        next[j] = 0
        for(let i = 1; i < s.length; i++) {
            while(j > 0 && s[i] != s[j]) {
                j = next[j-1]
            }
            if(s[i] == s[j]) {
                j++
            }
            next[i] = j
        }
        return next 
    }
    next = getNext(next, s)
    // 需要考虑到前后缀公共长度为0的情况下，一定不存在子串
    if(next[next.length-1] != 0 && s.length % (s.length - next[next.length-1]) == 0) {
        return true
    }
    return false
};