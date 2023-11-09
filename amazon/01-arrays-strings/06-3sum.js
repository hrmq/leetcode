
var threeSum =  {
    twoPointers,
    hashset
}


var twoPointers = function(nums) {
    nums.sort((a, b) => a - b)
    const result = []

    for (let i = 0; i < nums.length; i++ ) {
        if (i ==0 || nums[i] !== nums[i+1]) {
            towSum(i, nums, result)
        }
    }

    function towSum(i, nums, result) {
        let low = i + 1
        let high = nums.length - 1

        while (low < high) {
            let sum = nums[i] + nums[low] + nums[high]
            if (sum < 0) {
                ++low
            } else if(sum > 0) {
                --high
            } else {
                result.push([nums[i], nums[low++], nums[high--]])
                while(low < high && nums[low] == nums[low-1]) {
                    ++low
                }
            }
        }
    }

    return result
}

var hashset = function (nums) {
    nums.sort((i, j) => i - j )
    const result = []
    for (let i = 0; i < nums.length; i++) {
        if (i ==0 || nums[i -1] != nums[i]) {
            towSum(nums, i, result)
        }
    }
    
    function towSum(nums, i, result) {
     const seen = new Map()
     for(let j = i + 1 ; j < nums.length; j++) {
         const complmt = - nums[i] - nums[j]
        if (seen.has(complmt)) {
            result.push([nums[i], nums[j], parseInt(complmt)])
            while (j + 1 < nums.length && nums[j] == nums[j + 1])
                    ++j; 
        } else { 
            seen.set(nums[j], j)
        }
     }
    }

    return result
}

const examples = {
    example1: { inputParams: [[-1,0,1,2,-1,-4]], expected: [[-1,-1,2],[-1,0,1]]},
    example2: { inputParams: [[0,1,1]], expected: []},
    example3: { inputParams: [[0,0,0]], expected:[[0,0,0]]},
}

module.exports =  {
    examples,
    answer: twoPointers
}
