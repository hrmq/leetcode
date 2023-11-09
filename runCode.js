const equal = require('fast-deep-equal')
const colors = require('./colors')
const helpers = require('./helpers')

const problem = require('./learning/array-101/findMaxConsecutiveOnes')
// const problem = require('./algorithm/recursion/02-swapPairs')

for (let exam in problem.examples ) {
    const example = problem.examples[exam]
    const result = problem.answer(...example.inputParams)
    console.log(`-------------`)
    console.log(`Running the scenario: ${exam}`)
    console.log('Input    =>', example.inputParams)
    console.log('Result   =>', helpers.check(result))
    console.log('Expected => ', helpers.check(example.expected))
    
    if (equal(example.expected, result)) {
        console.log(colors.Green, 'Passed', colors.White)
    } else {
        console.log(colors.Red, 'Failed', colors.White)
    }

    console.log(`------------- \n`)
}