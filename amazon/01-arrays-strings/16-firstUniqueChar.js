
var firstUniqChar = function(s) {
    const mem = new Map()
    for (let i = 0; i < s.length; i++) {
        if (mem.has(s[i])) {
            mem.set(s[i], mem.get(s[i]) + 1)
        } else {
            mem.set(s[i], 1)
        }
    }

    for (let i = 0; i < s.length; i++) {
        if (mem.get(s[i]) === 1) return i
    }

    return -1
};

const examples = {
    example1: { inputParams: ["leetcode"], expected: 0 },
    example2: { inputParams: ["loveleetcode"], expected: 2 },
    example3: { inputParams: ["aabb"], expected: -1 },
}

module.exports =  {
    examples,
    answer: firstUniqChar
}
