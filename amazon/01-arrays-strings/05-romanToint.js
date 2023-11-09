
var romanToInt = function(s) {
    let symboles = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    }
    let result = 0

    for (let i = 0; i < s.length; i++) {
        if (symboles[s[i]] < symboles[s[i+1]]) {
            result -= symboles[s[i]]
        } else result += symboles[s[i]]
    }
    return result
};

const examples = {
    example1: { inputParams: ['III'], expected: 3},
    example2: { inputParams: ['LVIII'], expected: 58},
    example3: { inputParams: ['MCMXCIV'], expected:1994},
}

module.exports =  {
    examples,
    answer: romanToInt
}
