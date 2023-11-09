


var removeElement = function(nums, val) {
    let lastElement = nums.length - 1
    let count = 0

    for (let i = nums.length - 1; i >= 0; i-- ) {
        if (nums[i] === val) {
            count++
            nums[i] = nums[lastElement]
            nums[lastElement] = '_'
            lastElement--
        }
    }

    return nums.length - count
};

const examples = {
    emptyArrays: { inputParams: [[]], expected: 0},
    example1: { inputParams: [[3,2,2,3], 3 ], expected:2},
    example2: { inputParams: [[0,1,2,2,3,0,4,2], 2], expected: 5}
}

module.exports =  {
    examples,
    answer: removeElement
}

