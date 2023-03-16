// https://leetcode.cn/problems/count-ways-to-group-overlapping-ranges/
var countWays = function(ranges) {
    ranges = ranges.sort(function(a, b){return a[0]-b[0]})
    if (ranges.length == 1) {
        return 2
    }
    let num = 1
    let max = ranges[0][1]
    for (let i = 0; i < ranges.length - 1; i++) {
        if (max < ranges[i+1][0]) {
            num++
        }
        max = Math.max(max, ranges[i+1][1])
    }
    let res = (BigInt(2)**BigInt(num)) % BigInt(1e9+7)
    return res
};