// https://leetcode.cn/problems/ti-huan-kong-ge-lcof/
var replaceSpace = function(s) {
    // s = s.split('')
    // for(let i = 0; i < s.length; i++) {
    //     if(s[i] == ' ') {
    //         s[i] = '%20'
    //     }
    // }
    // s = s.join('')
    // return s
    s = s.split('')
    let count = 0
    for(let i = 0; i < s.length; i++) {
        if(s[i] == ' ') {
            count++
        }
    }   
    for(let i = s.length - 1, j = s.length + 2*count - 1; i < j; i--, j--) {
        if(s[i] != ' ') {
            s[j] = s[i]
        }
        else {
            s[j] = '0'
            s[j-1] = '2'
            s[j-2] = '%'
            j = j - 2
        }
    }
    s = s.join('')
    return s
};