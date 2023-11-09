

var storedSquares = function(nums) {
    for (let i = 0; i < nums.length; i++) {
        nums[i] = Math.pow(nums[i],2)
    }
    return nums.sort((a, b) => a - b )

    // let squares = nums.map(x => parseInt(x*x))
    // return squares.sort((a, b) => a - b )
};

const examples = {
    emptyArrays: { inputParams: [[]], expected: []},
    example1: { inputParams: [[-4,-1,0,3,10]], expected: [0,1,9,16,100]},
    example2: { inputParams: [[-7,-3,2,3,11]], expected: [4,9,9,49,121] }
}

module.exports =  {
    examples,
    answer: storedSquares
}
