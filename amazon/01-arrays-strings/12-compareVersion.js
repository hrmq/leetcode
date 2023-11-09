
var compareVersion = function(s, t) {
   const v1 = version1.split('.')
   const v2 = version2.split('.')
   const length = Math.max(v1.length, v2.length)
   
   let result = 0
   let p1, p2

   for (let i = 0; i < length; i++ )  {
    p1 = parseInt(v1[i] || 0)
    p2 = parseInt(v2[i] || 0)
    if ( p1 !== p2 )  {
        result = p1 < p2 ? -1 : 1
        break
     }    
   }

   return result
};

const examples = {
    example1: { inputParams: ["1.01", "1.001"], expected: 0 },
    example2: { inputParams: ["1.0", "1.0.0"], expected: 0 },
    example3: { inputParams: ["0.1", "1.1"], expected: -1 },
}

module.exports =  {
    examples,
    answer: compareVersion
}
