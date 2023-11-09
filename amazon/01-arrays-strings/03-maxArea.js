
var maxArea = function(s) {
    let max = 0
    let left = 0
    let right = s.length - 1

    while (left < right ) {
        let currentArea = Math.min(s[left], s[right]) * ( right - left )
        max = Math.max(currentArea, max)
        if(s[left] < s[right]) {
            left++
        } else {
            right--
        }

    }
    return max
};

const examples = {
    emptyArrays: { inputParams: [[]], expected: []},
    example1: { inputParams: [[1,8,6,2,5,4,8,3,7]], expected: 49},
    example2: { inputParams: [[1,8,9,2,5,9,8,3,7,2]], expected: 49},
    example3: { inputParams: [[1,1]], expected:1},
}

module.exports =  {
    examples,
    answer: maxArea
}
