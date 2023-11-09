const { on } = require("events");

var findMaxConsecutiveOnes = function(nums) {
    let maxCount = 0
    let ones = 0
    let len = nums.length 
    let lastZeroIndex = 0

    for (let i = 0; i < len; i++) {
        if (nums[i] === 0) {
            i++
            while (nums[i] && i < len) {
               ones++
               i++
            }
        } else {
            ones++
        }
    }
};
const examples = {
    emptyArrays: { inputParams: [[0]], expected: 0},
    example1: { inputParams: [ [1,0,1,1,0] ], expected:4},
    example2: { inputParams: [[1,0,1,1,0,1]], expected:4},
    example3: { inputParams: [[1,1,0,1,1,0,1]], expected:4}
}

module.exports =  {
    examples,
    answer: findMaxConsecutiveOnes
}

