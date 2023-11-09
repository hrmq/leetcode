
var isValid = function(s) {
    const stack = []
    const brackets = {
        ')': '(',
        ']': '[',
        '}': '{'
    }
    for (let i = 0; i < s.length; i++) {
        if (brackets[s[i]]) {
            if (stack.pop() !== brackets[s[i]]) {
                return false
            }
        } else {
            stack.push(s[i])
        }
    }

    return stack.length === 0
};

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
