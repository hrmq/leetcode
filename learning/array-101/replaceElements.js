

var replaceElements = function(arr) {
    let max = -1

    for (let i = arr.length -1; i >= 0; i--) {
        if (arr[i] > max ) {
            const tmp = arr[i]
            arr[i] = max
            max = tmp
        } else {
            arr[i] = max
        }
    }
    return arr
};

const examples = {
    emptyArrays: { inputParams: [[]], expected: []},
    example1: { inputParams: [[17,18,5,4,6,1]], expected: [18,6,6,6,1,-1]},
    example2: { inputParams: [[400]], expected: [-1]}
}

module.exports =  {
    examples,
    answer: replaceElements
}
