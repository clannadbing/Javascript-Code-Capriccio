// https://leetcode.cn/problems/subsets-ii/
// idea: 理解树枝去重与树层去重
var subsetsWithDup = function(nums) {
    nums = nums.sort(function(a, b){return a - b}) //排序：容易遗漏
    let res = []
    let path = []
    let used = new Array(nums.length).fill(0)
    var backtracking = function(nums, startindex){
        res.push(path.slice())
        if(startindex >= nums.length){
            return 
        }
        for(let i = startindex; i < nums.length; i++){
            // 树层去重, 树枝不去重; 两个需要注意的点：1、i > 0条件; 2 used[i-1] == 0 或者 used[i-1] != used[i] 均可以  
            if(i > 0 && nums[i] == nums[i-1] && used[i-1] == 0){
                continue
            }
            path.push(nums[i])
            used[i] = 1
            backtracking(nums, i+1)
            used[i] = 0
            path.pop()
        }
    }
    backtracking(nums, 0)
    return res
};