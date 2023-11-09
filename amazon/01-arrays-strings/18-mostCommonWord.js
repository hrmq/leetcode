
var mostCommonWord = function(paragraph, banned) {
    const mem = new Map()
    const words = paragraph.replace(new RegExp(/[^a-zA-Z0-9]/g), ' ')
    .split(' ')
    .map(word => word.toLowerCase())
    .filter(word => word && !banned.includes(word))

    for (let i = 0; i < words.length; i++) {
        const word = words[i].toLowerCase()
        if (mem.has(word)) {
            mem.set(word.toLowerCase(), mem.get(word) + 1)
        } else {
            mem.set(word, 1)
        }
    }

    let commonWord = null
    let max = 0
    mem.forEach((value,  key) => {
        if (value > max) {
            max = value
            commonWord = key
        }
    })

    return commonWord
};

const examples = {
    // example1: { inputParams: ["Bob hit a ball, the hit BALL flew far after it was hit.", ["hit"]], expected: "ball" },
    // example2: { inputParams: ["a.", []], expected: "a" },
    example3: { inputParams: ["Bob. hIt, baLl", ["bob", "hit"]], expected: "ball" },
    example4: { inputParams: ["a, a, a, a, b,b,b,c, c", ["a", "c"]], expected: "b" }
}

module.exports =  {
    examples,
    answer: mostCommonWord
}
