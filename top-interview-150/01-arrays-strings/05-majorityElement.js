
// Array:Easy

var majorityElement = function(nums) {
    const mem = new Map()
        
    for (let i = 0; i < nums.length; i++) {
        if (mem.has(nums[i])) {
            mem.set(nums[i], mem.get(nums[i]) + 1)
        } else mem.set(nums[i], 1)
    }

    console.log(mem)
};

const examples = {
    example1: { inputParams: [[3,2,3]], expected:3},
    example2: { inputParams: [[2,2,1,1,1,2,2]], expected: 2},
}

module.exports =  {
    examples,
    answer: majorityElement
}

