
var thirdMax = function(nums) {
    nums.sort((a, b) => a - b)
    let count = 0
    let i = 1
    let len = nums.length
    let max = nums[0]

    while ( i < len && count != 2 ) {
        if (nums[i] < max) {
            max = nums[i]
            count++
        }
        i++
    }

    return max
};

const examples = {
    emptyArrays: { inputParams: [[0]], expected: 0},
    example1: { inputParams: [[3,2,1] ], expected:1},
    example2: { inputParams: [[1,2]], expected:2},
    example3: { inputParams: [[2,2,3,1] ], expected:1},
    example4: { inputParams: [[5, 6, 10, 11, 11, 12] ], expected:10}
}

module.exports =  {
    examples,
    answer: thirdMax
}

