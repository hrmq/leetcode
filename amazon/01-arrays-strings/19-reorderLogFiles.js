
var reorderLogFiles = function(logs) {    
    logs.sort((a, b) => {
        let [idA, ...restA]  = a.split(' ')
        let [idB, ...restB] = b.split(' ')

        const isDigitA = !isNaN(Number(restA[0]))
        const isDigitB = !isNaN(Number(restB[0]))

        if (!isDigitA && !isDigitB) {
            restA = restA.join(' ')
            restB = restB.join(' ')
            const cmp =  restA.localeCompare(restB)
            if ( cmp != 0) {
                return cmp
            }
            return idA.localeCompare(idB)
        }

        if (!isDigitA && isDigitB) {
            return -1
        }

        if (isDigitA && !isDigitB) {
            return 1
        }

        if(isDigitA && isDigitB) {
            return 0
        }
    })
    return logs
};

const examples = {
    example1: { inputParams: [ ["dig1 8 1 5 1","let1 art can","dig2 3 6","let2 own kit dig","let3 art zero"]], expected: ["let1 art can","let3 art zero","let2 own kit dig","dig1 8 1 5 1","dig2 3 6"] },
    example2: { inputParams: [["a1 9 2 3 1","g1 act car","zo4 4 7","ab1 off key dog","a8 act zoo"]], expected: ["g1 act car","a8 act zoo","ab1 off key dog","a1 9 2 3 1","zo4 4 7"] },
    example3: { inputParams: [["a1 9 2 3 1","g1 act car","zo4 4 7","ab1 off key dog","a8 act zoo","a2 act car"]], expected: ["a2 act car","g1 act car","a8 act zoo","ab1 off key dog","a1 9 2 3 1","zo4 4 7"] },
}

module.exports =  {
    examples,
    answer: reorderLogFiles
}
