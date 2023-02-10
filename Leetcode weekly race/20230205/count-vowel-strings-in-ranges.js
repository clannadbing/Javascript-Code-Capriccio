var vowelStrings = function(words, queries) {
    let map = new Map()
    map.set('a', 0)
    map.set('e', 0)
    map.set('i', 0)
    map.set('o', 0)
    map.set('u', 0)
    for (let i = 0; i < words.length; i++) {
        console.log(words[i][0])
        if (map.has(words[i][0]) && map.has(words[i][words[i].length-1])) {
            words[i] = 1
        }
        else {
            words[i] = 0
        }
    }
    console.log(words)
    // 1、dp[i]含义：表示以下标i结尾的words数组中以元音开头和结尾的字符串的数目dp[i]
    // 2、dp[i]初始化：dp[0] = words[0]
    let dp = new Array(words.length).fill(0)
    dp[0] = words[0]
    for (let i = 1; i < words.length; i++) {
        if (words[i] == 1) {
            dp[i] = dp[i-1] + 1
        }
        else {
            dp[i] = dp[i-1]
        }
    }
    let res = []
    for (let i = 0; i < queries.length; i++) {
        let a = queries[i][0]
        let b = queries[i][1]
        res.push(dp[b]-dp[a]+words[a])
    }
    return res
};
console.log(vowelStrings(["aba","bcb","ece","aa","e"],[[0,2],[1,4],[1,1]]))