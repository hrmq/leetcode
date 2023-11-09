
// Array:Medium

var removeDuplicates = function(nums) {
    let dup_counter = 0
    let pointer = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== nums[i+1]) {
            dup_counter = 0
            nums[pointer] = nums[i]
            pointer++
        }
        if (nums[i] === nums[i+1]) {
            dup_counter++
            if (dup_counter == 1) {
                nums[pointer] = nums[i]
                pointer++
            }
        }
    }

    for (let i=pointer; i < nums.length; i++ ) {
        nums[i] = '_'
    }

    return nums
};

const examples = {
    example1: { inputParams: [[1,1,1,2,2,3]], expected:[1,1,2,2,3,'_']},
    example2: { inputParams: [[0,0,1,1,1,1,2,3,3]], expected: [0,0,1,1,2,3,3,'_','_']},
}

module.exports =  {
    examples,
    answer: removeDuplicates
}

