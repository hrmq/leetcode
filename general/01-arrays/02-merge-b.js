

var duplicateZeros = function(nums1, m, nums2, n) {
    let i = m - 1
    let j = n + m - 1
    
    while ( j > i ) {
        if ( nums1[i] < nums2[j] ) {
            nums1[i + j + 1] = nums2[j]
        } else {
            const  temp = nums1[i]
            nums1[i] = nums2[j]
            nums2[j] = temp
        }
        j --
    }

    return nums1
};

const examples = {
    emptyArrays: { inputParams: [[]], expected: []},
    example1: { inputParams: [[1,2,3,0,0,0], 3, [2,5,6], 3 ], expected: [1,2,2,3,5,6]},
    example2: { inputParams: [[1], 1, [], 0], expected: [1]},
    example3: { inputParams: [[0], 0, [1], 1], expected: [1]}
}

module.exports =  {
    examples,
    answer: duplicateZeros
}
