
var moveZeroes = function(nums) {
    let ptr = 0

    for(let i=0; i < nums.length; i++) {
        if (nums[i]) {
            nums[ptr] = nums[i]
            ptr++
        } 
    }

    for (let i = ptr ; i < nums.length; i++) {
        nums[i] = 0
    }

    return nums

};

const examples = {
    emptyArrays: { inputParams: [[0]], expected: [0]},
    example1: { inputParams: [[0,1,0,3,12] ], expected:[1,3,12,0,0]},
    example2: { inputParams: [[0,1,0,3,12,0,0,15,0] ], expected:[1,3,12,15,0,0,0,0,0]},
    example3: { inputParams: [[0,1,0,3,12]], expected:[1,3,12,0,0]}
}

module.exports =  {
    examples,
    answer: moveZeroes
}

