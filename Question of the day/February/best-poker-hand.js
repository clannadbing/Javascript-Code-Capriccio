// https://leetcode.cn/problems/best-poker-hand/
var bestHand = function(ranks, suits) {
    let board = ['Flush', 'Three of a Kind', 'Pair', 'High Card']
    suits = suits.sort()
    if (suits[0] == suits[suits.length-1]) {
        return board[0]
    }
    let map = new Map()
    for (let i = 0; i < ranks.length; i++) {
        if (!map.has(ranks[i])) {
            map.set(ranks[i], 1)
        }
        else {
            map.set(ranks[i], map.get(ranks[i])+1)
        }
    }
    console.log(map)
    let res = 0
    for (let i of map) {
        res = Math.max(i[1], res)  
    }
    if (res >= 3) {
        return board[1]
    }
    else if (res == 2) {
        return board[2]
    }
    else {
        return board[3]
    }
};