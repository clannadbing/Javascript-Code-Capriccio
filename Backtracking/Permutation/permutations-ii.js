// https://leetcode.cn/problems/permutations-ii/
var permuteUnique = function(nums) {
    nums.sort(function(a, b){return a-b})
    let res = []
    let path = []
    let used = new Array(nums.length)
    var backtracking = function(nums){
        if(path.length == nums.length){
            res.push(path.slice())
            return
        }
        for(let i = 0; i < nums.length; i++){
            if(used[i] == 1){
                continue
            }
            if(i > 0 && nums[i] == nums[i-1] && used[i-1] == 0){
                continue
            }
            path.push(nums[i])
            used[i] = 1
            backtracking(nums)
            used[i] = 0
            path.pop()
        }
    }
    backtracking(nums)
    return res
};