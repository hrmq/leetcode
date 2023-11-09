
var sortArrayByParity = function(nums) {
    let i = 0

    for(let j=0;j<nums.length;j++){
        if (nums[j] % 2 === 0) {
            let temp = nums[i]
            nums[i] = nums[j]
            nums[j] = temp
            i++
        }
    }

    return nums
};

var sortArrayByParity2 = function(A) {
    return [
        ...A.filter((el) => el % 2 === 0),
        ...A.filter((el) => el % 2 === 1),
    ];
};



const examples = {
    emptyArrays: { inputParams: [[0]], expected: [0]},
    example1: { inputParams: [[3,1,2,4] ], expected:[2,4,3,1]},
    example2: { inputParams: [[1,3,5,7] ], expected:[1,3,5,7]},
    example3: { inputParams: [[2,4,6,8] ], expected:[2,4,6,8]},
    example4: { inputParams: [[1,3,5,7,4] ], expected:[4,1,3,5,7]},
}

module.exports =  {
    examples,
    answer: sortArrayByParity
}

