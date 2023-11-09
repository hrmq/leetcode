
var threeSumClosest = function(nums, target) {
    nums.sort((i, j) => i - j )
    let len = nums.length
    let diff = Number.MAX_VALUE

    for (let i = 0; i < len && diff != 0; i++) {
        let lo = i + 1
        let hi = len - 1
        while ( lo < hi) {
            let sum = nums[i] + nums[lo] + nums[hi]
            if (Math.abs(target - sum) < Math.abs(diff)) {
                diff = target - sum
            }
            if (sum < target) {
                ++lo
            } else {
                --hi
            }
        }
    }

   return target - diff
};

const examples = {
    example1: { inputParams: [[-1,2,1,-4], 1], expected: 2},
    example2: { inputParams: [[0,0,0], 1], expected:0},
}

module.exports =  {
    examples,
    answer: threeSumClosest
}
