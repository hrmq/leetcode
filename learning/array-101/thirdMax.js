// Given an integer array nums, return the third distinct maximum number in this array. 
// If the third maximum does not exist, return the maximum number.

var thirdMax = function(nums) {
    nums.sort((a, b) => b - a)
    let max_pos = 0
    for (let i = 0; i < nums.length; nums++) {

    }
    
};

const examples = {
    example1: { inputParams: [[3,2,1]], expected: 1},
    example2: { inputParams: [[1,2]], expected: 2 },
    example3: { inputParams: [[2,2,3,1]], expected: 1 }
}

module.exports =  {
    examples,
    answer: thirdMax
}
