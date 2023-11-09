
var intToRoman = function(num) {
    const values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
    const symbols = ["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"]
    const result = []
    
    for (let i = 0; i < values.length && num > 0; i++) {
        while (num >= values[i]) {
            num -= values[i]
            result.push(symbols[i])
        }
    }

    return result.join('')
};

const examples = {
    example1: { inputParams: [3], expected: 'III'},
    example2: { inputParams: [58], expected: 'LVIII'},
    example3: { inputParams: [1994], expected:'MCMXCIV'},
}

module.exports =  {
    examples,
    answer: intToRoman
}
