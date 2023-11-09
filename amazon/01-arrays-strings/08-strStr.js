
var strStr = function(haystack, needle) {
    let m = needle.length
    let n = haystack.length

    for (let windowStart = 0; windowStart <= n-m; windowStart++) {
        for (let i = 0; i < m; i++) {
            if (needle[i] != haystack[windowStart + i]) {
                break
            }
            if (i == m - 1) {
                return windowStart
            }
        }
    }

    return -1
};

const examples = {
    example1: { inputParams: ["msadbutsad", "sad"], expected: 1},
    example2: { inputParams: ["leetcode", "leeto"], expected:-1},
    example2: { inputParams: ["mississippi", "issip"], expected:4},
}

module.exports =  {
    examples,
    answer: strStr
}
