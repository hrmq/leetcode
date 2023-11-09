// Given a binary array nums, return the maximum number of consecutive 1's in the array if you can flip at most one 0.

var findMaxConsecutiveOnes = function(nums) {
    let last = 0
    let i = 0
    let max = 0

    for (let j = 0; j < nums.length; j++) {
        if (nums[j] === 0 ) {
            max = Math.max((j-i) + last, max)
            last = j - i
            i = j
        }
    }

    return max
};

const examples = {
    emptyArrays: { inputParams: [[]], expected: 0 },
    example1: { inputParams: [[1,0,1,1,0]], expected: 4},
    example2: { inputParams: [[1,0,1,1,0,1]], expected: 4 },
    example2: { inputParams: [[1,1,0,1]], expected: 4 }
}

module.exports =  {
    examples,
    answer: findMaxConsecutiveOnes
}
