// https://leetcode.cn/problems/3sum/
var threeSum = function(nums) {
    nums = nums.sort(function(a, b) {return a - b})
    let res = []
    for(let i = 0; i < nums.length; i++) {
        // 错误去重a方法，将会漏掉-1,-1,2 这种情况
            /*
            if (nums[i] == nums[i + 1]) {
                continue;
            }
            */
        // 正确去重a方法
        if(i > 0 && nums[i] == nums[i-1]) {
            continue
        }
        let left = i + 1
        let right = nums.length - 1
        while(left < right) {
             // 去重复逻辑如果放在这里，0，0，0 的情况，可能直接导致 right<=left 了，从而漏掉了 0,0,0 这种三元组
                /*
                while (right > left && nums[right] == nums[right - 1]) right--;
                while (right > left && nums[left] == nums[left + 1]) left++;
                */
            if(nums[i] + nums[left] +nums[right] < 0) {
                left++
            }
            else if(nums[i] + nums[left] + nums[right] > 0) {
                right--
            }
            else{
                res.push([nums[i],nums[left],nums[right]])
                // 去重逻辑应该放在找到一个三元组之后，对b和c去重
                while(left < right && nums[left] == nums[left+1]) {
                    left++
                }
                while(left < right && nums[right] == nums[right-1]) {
                    right--
                }
                left++
                right--
            }
        }
    }
    return res
};