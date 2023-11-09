

var duplicateZeros = function(nums1, m, nums2, n) {

   for (let i = m, j = 0; i < m + n; i++, j++) {
        nums1[i] = nums2[j]
   }
   
   return nums1.sort((a, b) => a - b)
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
