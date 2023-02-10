// https://leetcode.cn/problems/squares-of-a-sorted-array/
// idea: https://programmercarl.com/0977.%E6%9C%89%E5%BA%8F%E6%95%B0%E7%BB%84%E7%9A%84%E5%B9%B3%E6%96%B9.html
// point: 双指针-首尾指针
var sortedSquares = function(nums) {
    let res = new Array(nums.length)
    let index = res.length - 1
    for(let i = 0, j = nums.length - 1; i <= j;){
        if(nums[i]*nums[i] <= nums[j]*nums[j]){
            res[index] = nums[j]*nums[j]
            j--
            index--
        }
        else{
            res[index] = nums[i]*nums[i]
            i++
            index--
        }
    }
    return res
};