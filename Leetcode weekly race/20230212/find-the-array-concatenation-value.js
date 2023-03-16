var findTheArrayConcVal = function(nums) {
    let res = 0
    if (nums.length % 2 == 0) {
        while (nums.length != 0) {
            let left = nums.shift()
            let right = nums.pop()
            let n = Math.floor(right / 10) + 1
            res += left *(10**n) + right 
        }
    }
    else {
        while (nums.length != 1) {
            let left = nums.shift()
            let right = nums.pop()
            let n = Math.floor(right / 10) + 1
            res += left*(10**n) + right
        }
        res += nums.pop()
    }
    return res
};