// https://leetcode.cn/problems/find-the-index-of-the-first-occurrence-in-a-string/
// idea: https://programmercarl.com/0028.%E5%AE%9E%E7%8E%B0strStr.html#%E5%85%B6%E4%BB%96%E8%AF%AD%E8%A8%80%E7%89%88%E6%9C%AC
var strStr = function(haystack, needle) {
    let next = new Array(needle.length)
    var getNext = function(next, str) {
        let j = 0
        next[j] = 0
        for(let i = 1; i < str.length; i++) {
            while(j > 0 && str[j] != str[i]) {
                j = next[j-1]
            }
            if(str[j] == str[i]) {
                j++
            }
            next[i] = j
        }
        return next
    }
    next = getNext(next, needle)
    let j = 0
    for(let i = 0; i < haystack.length; i++) {
        while(j > 0 && haystack[i] != needle[j]) {
            j = next[j-1]
        }
        if(haystack[i] == needle[j]) {
            j++
        }
        if(j == needle.length) {
            return i - j + 1
        }
    }
    return -1
};