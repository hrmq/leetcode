// Given a binary array nums, return the maximum number of consecutive 1's in the array if you can flip at most one 0.

var findMaxConsecutiveOnes = function(nums) {
    let count = 0
    let prev = 0
    let max = 0

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            prev = count + 1
            count = 0
        } else {
            count++
        }
        let tmp = count + prev 
        max = Math.max(tmp, max)
    }

    return max
};

const examples = {
    emptyArrays: { inputParams: [[]], expected: 0 },
    example1: { inputParams: [[1,0,1,1,0]], expected: 4},
    example2: { inputParams: [[1,0,1,1,0,1]], expected: 4 },
    example3: { inputParams: [[1,1,0,1]], expected: 4 },
    example4: { inputParams: [[1]], expected: 1 },
}

module.exports =  {
    examples,
    answer: findMaxConsecutiveOnes
}
