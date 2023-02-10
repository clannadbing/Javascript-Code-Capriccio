// https://leetcode.cn/problems/count-distinct-numbers-on-board/
var distinctIntegers = function(n) {
    if (n <= 2) {
        return 1
    }
    else {
        return n-1
    }
};