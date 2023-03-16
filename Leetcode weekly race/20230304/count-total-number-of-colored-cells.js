// https://leetcode.cn/problems/count-total-number-of-colored-cells/
var coloredCells = function(n) {
    return 2*Math.pow(n, 2) - 2*n +1
};