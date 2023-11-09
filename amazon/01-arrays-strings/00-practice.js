var minWindow = function(s, t) {
    if (s.length === 0 || t.length === 0) {
        return ''
    }

    let start  = 0
    let end = 0
    let chars = new Set(t.split(''))
    console.log(chars)
    let output = ''
    for (let i = 0; i < s.length; i++) {
        console.log('1==>', chars.has(s[i]), s[i])
        if (chars.has(s[i])) {
            let tmp = ''
            start = i
            end = i + 1
            chars.delete(s[i])

            while (chars.size !== 0 && end < s.length) {
                console.log('2==>', chars.has(s[end]), s[end])
                if (chars.has(s[end])) {
                    console.log('3==>', chars.size)
                    chars.delete(s[end])
                }
                end++
            }

            tmp = s.substring(start, end)
            console.log('2==>', tmp)
            if (output === '' && tmp.length > 1 ) {
                output = tmp
            }
            console.log('3==>', output, output.length ,tmp.length)
            if (output.length > tmp.length ) {
                output = tmp
            }
            console.log('4==>', output)

            chars = new Set(t.split(''))
            i = end
        }
    }
    return output
};

const examples = {
    example1: { inputParams: ["ADOBECODEBANC", "ABC"], expected: "BANC" },
    example2: { inputParams: ["a", "a"], expected: "a" },
    example3: { inputParams: ["a", "aa"], expected: "" },
}

module.exports =  {
    examples,
    answer: minWindow
}
