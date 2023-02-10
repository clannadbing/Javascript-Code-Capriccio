// https://leetcode.cn/problems/design-authentication-manager/
/**
 * @param {number} timeToLive
 */
var AuthenticationManager = function(timeToLive) {
    this.ttl = timeToLive
    this.map = new Map()
};

/** 
 * @param {string} tokenId 
 * @param {number} currentTime
 * @return {void}
 */
AuthenticationManager.prototype.generate = function(tokenId, currentTime) {
    this.map.set(tokenId, currentTime + this.ttl)
};

/** 
 * @param {string} tokenId 
 * @param {number} currentTime
 * @return {void}
 */
AuthenticationManager.prototype.renew = function(tokenId, currentTime) {
    if (this.map.has(tokenId) && (this.map.get(tokenId) > currentTime)) {
        this.map.set(tokenId, currentTime + this.ttl)
    }
};

/** 
 * @param {number} currentTime
 * @return {number}
 */
AuthenticationManager.prototype.countUnexpiredTokens = function(currentTime) {
    let res = 0
    for (let i of this.map) {
        if (i[1] > currentTime) {
            res++
        }
    }
    return res
};

/**
 * Your AuthenticationManager object will be instantiated and called as such:
 * var obj = new AuthenticationManager(timeToLive)
 * obj.generate(tokenId,currentTime)
 * obj.renew(tokenId,currentTime)
 * var param_3 = obj.countUnexpiredTokens(currentTime)
 */