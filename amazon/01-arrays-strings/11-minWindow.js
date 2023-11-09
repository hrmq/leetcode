
var minWindow = function(s, t) {
    if (s.length === 0 || t.length === 0) {
        return ''
    }

    const dicT = new Map()
    for (let i = 0; i < t.length; i++) {
        let count = dicT.has(t[i]) ? dicT.get(t[i]) : 0
        dicT.set(t[i], count)
    }

    console.log(dicT)

    let required = dicT.size
    let left = 0
    let right = 0
    let formed = 0
    let windowsCount = new Map()

    let ans = [-1, 0, 0]

    while (right < s.length) {
        let c = s[right]
        let count = windowsCount.has(c) ? windowsCount.get(c) : 0
        console.log('2=>>>', c, count)
        windowsCount.set(c, count++)

        if (dicT.has(c) && windowsCount.get(c) === dicT.get(c)) {
            formed++
        }

        console.log('2-1=>>>', formed)

        while(left <= right && formed == required) {
            c = s[left]
            console.log('3=>', c, right , left)
            if (ans[0] == -1 || right - left + 1 < ans[0]) {
                ans[0] = right - left + 1
                ans[1] = left
                ans[2] = right
            }
            console.log('3.1=>', ans)

            windowsCount.set(c, windowsCount.get(c) - 1)
            console.log('3.3=>', dicT.has(c) && windowsCount.get(c) < dicT.get(c))
            if (dicT.has(c) && windowsCount.get(c) < dicT.get(c)) {
                formed--
            }
            console.log('3-1=>', formed)
            left++
        }
        right++
    }
    console.log('end => ', ans[1], ans[2])
    return ans[0] == -1 ? "" : s.substring(ans[1], ans[2] + 1);
};

const examples = {
    example1: { inputParams: ["ADOBECODEBANC", "ABC"], expected: "BANC" },
    // example2: { inputParams: ["a", "a"], expected: "a" },
    // example3: { inputParams: ["a", "aa"], expected: "" },
}

module.exports =  {
    examples,
    answer: minWindow
}
