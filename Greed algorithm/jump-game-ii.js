// https://leetcode.cn/problems/jump-game-ii/
var jump = function(nums) {
    if (nums.length == 1) {
        return 0
    }
    let cover = 0
    let next = 0
    let res = 0
    for (let i = 0; i <= cover; i++) {
        next = Math.max(next, i+nums[i])
        if (i == cover) {
            if (i < nums.length - 1) {
                cover = next
                res++
            }
            else {
                break
            }
        }
    }
    return res
};