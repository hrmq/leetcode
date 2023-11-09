
var checkIfExist = function(arr) {
    if (arr.length === 0) return false

    const obj = new Map()

    for (let i = 0; i< arr.length; i++) {
       const num = arr[i]
       if (obj.has(num*2) || obj.has(num/2)) {
            return true
       }
       obj.set(num, i)
    }

    return false
};

var checkIfExist2 = function(arr) {
    const numbers = new Set();
    
    for(n of arr) {
        const double = n * 2;
        const half = n / 2;
        
        if(numbers.has(double) || numbers.has(half)) return true;
        
        numbers.add(n);
    }
    
    return false;
};

const examples = {
    emptyArrays: { inputParams: [[]], expected: false},
    example1: { inputParams: [[10,2,5,3] ], expected:true},
    example2: { inputParams: [[3,1,7,11,22]], expected: true},
    example2: { inputParams: [[3,1,7,11]], expected: false}
}

module.exports =  {
    examples,
    answer: checkIfExist2
}

