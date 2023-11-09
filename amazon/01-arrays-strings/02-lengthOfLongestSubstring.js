
var lengthOfLongestSubstring = function(s) {
    if (!s) return 0
    
    const hash = new Set()
    let maxLength = 0
    let i= 0, j =0
    
    while ( i < s.length && j < s.length ) {
        if (!hash.has(s[j])) {
            hash.add(s[j])
            j++
            maxLength = Math.max(maxLength, j - i)  
        } else {
            hash.delete(s[i])
            i++
        } 
    }
    return maxLength
};

const examples = {
    emptyArrays: { inputParams: [[]], expected: []},
    example1: { inputParams: ["abcabcbb"], expected: 3},
    example2: { inputParams: ["bbbbb"], expected:1},
    example3: { inputParams: ["pwwkew"], expected: 3},
}

module.exports =  {
    examples,
    answer: lengthOfLongestSubstring
}
