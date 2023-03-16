// https://leetcode.cn/problems/find-the-divisibility-array-of-a-string/
var divisibilityArray = function(word, m) {
    let res = []
    let sum = 0
    for (let i = 0; i < word.length; i++) {
        sum = (sum * 10 + (word[i] - '0')) % m
        if (sum == 0) {
            res[i] = 1
        }
        else {
            res[i] = 0
        }
    }
    return res
};