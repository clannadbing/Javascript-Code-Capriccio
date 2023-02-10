var pickGifts = function(gifts, k) {
    let res = 0
    while (k != 0) {
        let num = Math.max(...gifts)
        let i = gifts.indexOf(num)
        gifts[i] =  Math.floor(Math.sqrt(num))
        k--
    }
    for (let i = 0; i < gifts.length; i++) {
        res = res + gifts[i]
    }
    return res
};
console.log(pickGifts([25,64,9,4,100], 4))