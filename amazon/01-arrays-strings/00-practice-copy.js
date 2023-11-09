
var isValid = function(s) {
    const stack = []
    // push each s[i] in stack
    // check if it's in ([{ 
    // if it's not pop and compare

    const brackets = {
        '}': '{}',
        ']': '[]',
        ')': '()'
    }

    for (let i = 0; i < s.length; i++) {
        const char = s[i]
        if (brackets[char]) {
            let r = stack.pop() + char
            if (brackets[char] !== r) return false
        } else {
            stack.push(char)
        }
    }
    return (stack.length === 0) ? true : false
}

const examples = {
    example1: { inputParams: ["()"], expected: true },
    example2: { inputParams: ["()[]{}"], expected: true },
    example3: { inputParams: ["(]"], expected: false },
    example4: { inputParams: ["((()(())))"], expected: true },
    example5: { inputParams: ["["], expected: false },
}

module.exports =  {
    examples,
    answer: isValid
}
