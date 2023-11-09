
// Easy

var removeDuplicates = function(array) {
    if (array.length === 0) return 0
    let ptr = 0

    for (let i =1; i < array.length ; i++) {
        if (array[i-1] != array[i]) {
            ptr++
            array[ptr] = array[i] 
        }
    }

    for (let j = ptr + 1; j < array.length; j++) {
        array[j] = '_'
    }

    console.log(array)
    return ++ptr 
};

var removeDuplicates2 = function(nums) {
    let i = 0
     for (let j = 1; j < nums.length; j++) {
         if (nums[i] !== nums[j]) {
             i++
             nums[i] = nums[j]
         }
     }
     return i + 1
};

function test(array) {
    let ptr = 0
    for (let i = 0; i < array.length - 1; i++) {
        if (array[i] !== array[i+1]) {
            ptr++
            array[ptr] = array[i]
        } 
    }

    for (let i = ptr + 1; i < array.length; i++) {
        array[i] = '_'
    }

    return ++ptr
}

const examples = {
    emptyArrays: { inputParams: [[]], expected: 0},
    example1: { inputParams: [[1,1,2]], expected:2},
    example2: { inputParams: [[0,0,1,1,1,2,2,3,3,4]], expected: 5},
    example2: { inputParams: [[0,0,1,1,1,2,2,3,3,4,5,5,5,5,6,6,6]], expected: 7}
}

module.exports =  {
    examples,
    answer: test
}

