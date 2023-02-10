// https://leetcode.cn/problems/ransom-note/
var canConstruct = function(ransomNote, magazine) {
    let map = new Map()
    for(let i = 0; i < ransomNote.length; i++) {
        if(!map.has(ransomNote[i])) {
            map.set(ransomNote[i], 1)
        }
        else {
            map.set(ransomNote[i], map.get(ransomNote[i])+1)
        }
    }
    for(let j = 0; j < magazine.length; j++) {
        if(map.has(magazine[j])) {
            if(map.get(magazine[j]) == 1) {
                map.delete(magazine[j])
            }
            else{
                map.set(magazine[j], map.get(magazine[j])-1)
            }
        }
    }
    if(map.size == 0) {
        return true
    }
    return false
};