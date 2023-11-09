
// brute-force
var trap_brute_force = function(height) {
    let ans = 0
    let size = height.length

    for (let i = 0; i < size -1; i++) {
        let left_max = 0, right_max = 0
        for (let j = i; j >= 0; j--) {
            left_max = Math.max(left_max, height[j])
        }
        for (let j = i; j < size; j++) {
            right_max = Math.max(right_max, height[j])
        }
        ans += Math.min(left_max, right_max) - height[i]
    }

    return ans
};

// dynamic programming
var trap_dynamic_programming = function(height) {
    if (height.length === 0) return 0

    let ans = 0
    let size = height.length
    let left_max = [], right_max = []
    left_max[0] = height[0]

    for (let i = 1; i < size -1 ; i++) {
        console.log('AAA', height[i], left_max[i-1])
        left_max[i] = Math.max(height[i], left_max[i-1])
    }

    right_max[size -1] = height[size -1]
    for (let i = size - 2; i >= 0; i--) {
        console.log('BBB', height[i], right_max[i+1])
        right_max[i] = Math.max(height[i], right_max[i+1])
    }

    for (let i = 1; i < size - 1; i++) {
        ans += Math.min(left_max[i], right_max[i]) - height[i]
    }

    return ans

}

const examples = {
    example1: { inputParams: [[0,1,0,2,1,0,1,3,2,1,2,1]], expected: 6 },
    //example2: { inputParams: [[4,2,0,3,2,5]], expected: 9 }
}

module.exports =  {
    examples,
    answer: trap_dynamic_programming
}
