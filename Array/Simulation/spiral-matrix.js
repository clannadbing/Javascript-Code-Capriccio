// https://leetcode.cn/problems/spiral-matrix/
var spiralOrder = function(matrix) {
    let res = []
    let m = matrix.length
    let n = matrix[0].length
    let startx = 0
    let starty = 0
    let loop = Math.floor(Math.min(m, n) / 2)
    let mid = Math.floor(Math.min(m, n) / 2)
    let offset = 1
    let i, j
    while(loop-- > 0) {
        i = startx
        j = starty
        for(j = starty; j < matrix[0].length - offset; j++) {
            res.push(matrix[i][j])
        }
        for(i = startx; i < matrix.length - offset; i++){
            res.push(matrix[i][j])
        }
        for(; j > starty; j--){
            res.push(matrix[i][j])
        }
        for(; i > startx; i--){
            res.push(matrix[i][j])
        }
        startx++
        starty++
        offset++
    }
    if(Math.min(m, n) % 2 == 1){
        if(m < n){
            for(j = mid; j <= matrix[0].length - offset; j++){
                res.push(matrix[mid][j])
            }
        }
        else{
            for(i = mid; i <= matrix.length - offset; i++){
                res.push(matrix[i][mid])
            }
        }
    }
    return res
};