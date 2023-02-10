// https://leetcode.cn/problems/decode-the-message/
var decodeMessage = function(key, message) {
    let map = new Map()
    map.set(' ', ' ')
    for (let i = 0, j = 97; i < key.length; i++) {
        if (!map.has(key[i])) {
            map.set(key[i], String.fromCharCode(j)) // js数字转字母
            j++
        }
        else {
            continue
        }
    }
    console.log(map)
    message = message.split('')
    for (let i = 0; i < message.length; i++) {
        message[i] = map.get(message[i])
    }
    message = message.join('')
    return message
};