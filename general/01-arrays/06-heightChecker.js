
var heightChecker = function(nums) {
   const sortedArray = [...nums]
   nums.sort((a,b) => a - b)
   let output = 0
   for (let i=0; i < nums.length; i++)  {
    if (sortedArray[i] !== nums[i]) {
        output++
    }
   }
   return output
};

var heightChecker2 = function(heights) {
    let sorted = [...heights].sort((a,b) => a - b)
    let counter = 0
    
    for(let i = 0; i < heights.length; i++) {
        if(heights[i] !== sorted[i])
            counter++
    }
    return counter
}


const examples = {
    emptyArrays: { inputParams: [[0]], expected: 0},
    example1: { inputParams: [[1,1,4,2,1,3] ], expected:3},
    example2: { inputParams: [[5,1,2,3,4]], expected:5},
    example3: { inputParams: [[1,2,3,4,5] ], expected:0}
}

module.exports =  {
    examples,
    answer: heightChecker
}

