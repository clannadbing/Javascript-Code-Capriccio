// https://leetcode.cn/problems/valid-anagram/
var isAnagram = function(s, t) {
    let map = new Map()
    for(let i = 0; i < s.length; i++) {
        if(!map.has(s[i])) {
            map.set(s[i], 1)
        }
        else {
            map.set(s[i], map.get(s[i])+1)
        }
    }
    for(let j = 0; j < t.length; j++) {
        if(!map.has(t[j])) {
            return false
        }
        else if(map.has(t[j]) && map.get(t[j]) == 1) {
            map.delete(t[j])
        }
        else {
            map.set(t[j], map.get(t[j]) - 1)
        }
    }
    if(map.size) {
        return false
    }
    return true
};