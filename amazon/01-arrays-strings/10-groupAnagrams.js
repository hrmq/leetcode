
var groupAnagram = function(strs) {
    const mem = new Map()

    for (let i = 0; i < strs.length; i++) {
        const strSorted = [...strs[i]].sort().join('')
        if (mem.has(strSorted)) {
            const tmp = mem.get(strSorted)
            mem.set(strSorted, tmp.concat([strs[i]]))
        } else {
            mem.set(strSorted,[strs[i]])
        }
    }

    return [...mem.values()]
};

const examples = {
    example1: { inputParams: [["eat","tea","tan","ate","nat","bat"]], expected: [["bat"],["nat","tan"],["ate","eat","tea"]]},
}

module.exports =  {
    examples,
    answer: groupAnagram
}
