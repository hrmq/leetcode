

var findMaxConsecutiveOnes = function(nums) {
    let maxConsecutive = 0
    let max = 0

    for (let i=0; i < nums.length; i++) {
        if ( nums[i] == 0) {
            maxConsecutive = Math.max(maxConsecutive, max)
            max = 0
        } else {
            max++
        }
    }   

    return Math.max(maxConsecutive, max)
};

const examples = {
    emptyArrays: { inputParams: [[]], expected: 0},
    example1: { inputParams: [[1,1,0,1,1,1]], expected: 3}
}

module.exports =  {
    examples,
    answer: findMaxConsecutiveOnes
}
