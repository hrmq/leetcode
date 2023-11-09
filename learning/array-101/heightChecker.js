

var heightChecker = function(heights) {
    const sortedArray = [...heights].sort((a, b) => a - b)
    let expected = 0
    for (let i = 0; i < heights.length; i++) {
        if (heights[i] !== sortedArray[i]) {
            expected++
        }
    }

    return expected
};

const examples = {
    emptyArrays: { inputParams: [[]], expected: 0 },
    example1: { inputParams: [[1,1,4,2,1,3]], expected: 3},
    example2: { inputParams: [[5,1,2,3,4]], expected: 5 },
    example3: { inputParams: [[1,2,3,4,5]], expected: 0 }
}

module.exports =  {
    examples,
    answer: heightChecker
}
