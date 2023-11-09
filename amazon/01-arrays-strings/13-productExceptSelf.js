
// Approach 1: Left and Right Product List
var productExceptSelf_1 = function(nums) {
   const left = []
   const right = []
   const result = []

   left[0] = 1
   for (let i = 1; i < nums.length; i++) {
    left[i] = left[i-1] * nums[i-1]
   }

   right[nums.length -1] = 1
   for (let i = nums.length -2 ; i >= 0 ; --i) {
    right[i] = right[i+1]* nums[i+1]
   }

   for(let i = 0; i < nums.length; i++) {
    result[i] = parseInt(left[i] * right[i])
   }

   return result
  
};

// Approach 2: O(1) space approach
var productExceptSelf_2 = function(nums) {
    const result = []
    
    result[0] = 1
    for (let i = 1; i < nums.length; i++) {
        result[i] = nums[i-1] * result[i-1]
    }

    let right = 1
    for (let i = nums.length -1 ; i >=0; i--) {
        result[i] = result[i] * right
        right *= nums[i]
    }

    return result
 };

const examples = {
    example1: { inputParams: [[1,2,3,4]], expected: [24,12,8,6] },
    example2: { inputParams: [[-1,1,0,-3,3]], expected: [0,0,9,0,0] }
}
 
module.exports =  {
    examples,
    answer: productExceptSelf_2
}
