

var twoSum = function(nums, target) {
    const mem = new Map()
    for (let i = 0; i < nums.length; i++) {
        let diff = target - nums[i] 
        if (mem.has(diff)) {
            return [i, mem.get(diff)]
        } else mem.set(nums[i], i)
    }
    return []
};

const examples = {
    emptyArrays: { inputParams: [[]], expected: []},
    example1: { inputParams: [[2,11,15], 9], expected: [0,1]},
    example2: { inputParams: [[3,2,4], 6], expected: [2,1]},
    example3: { inputParams: [[3,3], 6], expected: [0,1]},
    example4: { inputParams: [[0,4,3,0], 0], expected: [0,3]},
}

module.exports =  {
    examples,
    answer: twoSum
}
