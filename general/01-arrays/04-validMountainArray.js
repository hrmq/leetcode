// return false if array is empty
/*
    let isMountain = false
    let checkAsc = (a, b) => a < b
    let checkDesc = (a, b) => a > b

    let 

    for (let i = 0; i < arr.len; i++) {
        if (checkAsc(i, i+1)) 
    }


*/

var validMountainArray = function(arr) {
    if (arr.length < 2 ) return false
    let opt = 0
    
    if (arr[0] > arr[1]) return false

    for (let i = 1; i < arr.length; i++) {
        let a = arr[i-1]
        let b = arr[i]
        
        if (a == b) return false

        if ( a > b && opt == 0 ) {
            opt++
        }
        
        if ( a < b && opt == 1) {
            return false
        }
    }
    return opt ? true : false
};

const examples = {
    emptyArrays: { inputParams: [[]], expected: false},
     example1: { inputParams: [[2,1] ], expected:false},
    example2: { inputParams: [[3,5,5]], expected: false},
    example3: { inputParams: [[0,3,2,1]], expected: true},
    example4: { inputParams: [[0,2,3,4,5,2,1,0]], expected: true},
    example5: { inputParams: [[1,1] ], expected:false},
    example6: { inputParams: [[2,0,2] ], expected:false},
    example7: { inputParams: [[2,1,2,3,5,7,9,10,12,14,15,16,18,14,13] ], expected:false},
    example8: { inputParams: [[0,1,2,3,4,5,6,7,8,9]], expected:false},
}

module.exports =  {
    examples,
    answer: validMountainArray
}

