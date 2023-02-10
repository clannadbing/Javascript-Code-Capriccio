// https://leetcode.cn/problems/sqrtx/
var mySqrt = function(x) {
    let left = 0
    let right = x
    while(left <= right){
        let mid = Math.floor(left + (right - left)/2)
        if(mid*mid > x){
            right = mid - 1
        }
        else if(mid*mid < x){
            left = mid + 1
        }
        else{
            return mid
        }
    }
    // [0,1,2,3] x = 3
    // 0, 3 --> 1
    // 2, 3 --> 2
    // 2, 2 --> 2
    // left:2  right:1
    return right
};