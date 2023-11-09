
// Approach #3 Bit Manipulation
var missingNumber_3 = function(nums) {
    let missing = nums.length
    for (let i =0; i < nums.length; i++) {
        missing ^= i ^ nums[i]
    }
    return missing
};


// Approach #4 Gauss' Formula
var missingNumber_4 = function(nums) {
    let expectedSum = nums.length * (nums.length + 1) / 2
    for (let i = 0; i < nums.length; i++) {
        expectedSum -= nums[i]
    }
    return expectedSum
};

const examples = {
    example1: { inputParams: [[3,0,1]], expected: 2 },
    example2: { inputParams: [[0,1]], expected: 2 },
    example3: { inputParams: [[9,6,4,2,3,5,7,0,1]], expected: 8 },
}

module.exports =  {
    examples,
    answer: missingNumber_4
}
