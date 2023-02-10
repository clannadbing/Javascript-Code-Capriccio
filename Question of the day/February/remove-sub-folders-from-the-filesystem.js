// https://leetcode.cn/problems/remove-sub-folders-from-the-filesystem/
// 1. 字典序排序
// 2. 使用indexOf函数检验folder[j]是否从开头出现的folder[j] --> 特别注意:这里不能使用match或者search会漏掉["/c","/d/c/e"]情况
// 3. 使用lastindexOf函数判断folder[j]是否在folder[i]其子目录下面
var removeSubfolders = function(folder) {
    folder = folder.sort()
    for (let i = 0; i < folder.length; i++) {
        let j = i + 1
        while (folder[j] != undefined && folder[j].indexOf(folder[i]) == 0 && folder[j].lastIndexOf('/') != folder[i].lastIndexOf("/")) {
            folder.splice(j, 1)
        }
    }
    return folder
};