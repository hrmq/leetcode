

var duplicateZeros = function(arr) {
    let len = arr.length

   for (let i = 0; i < len; i++) {
        if (arr[i] === 0) {
            for (j = len-1; j > i;j--) {
                arr[j] = arr[j-1]
            }
            arr[i]=0       
            i++
        }
   }
   
   return arr
};

const examples = {
    emptyArrays: { inputParams: [[]], expected: []},
    example1: { inputParams: [[1,0,2,3,0,4,5,0]], expected: [1,0,0,2,3,0,0,4]}
}

module.exports =  {
    examples,
    answer: duplicateZeros
}
