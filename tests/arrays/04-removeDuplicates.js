
function removeDuplicates(array) {
    const len = array.length
    let currIndex = 1

    for (let i = 0; i < len; i++) {
        if (array[i] === array[i+1]) {
            continue
        } else {
            array[currIndex] = array[i+1]
            currIndex++
        }
    }

    for (let j = currIndex - 1; j < len; j++) {
        array[j] = '-'
    }

    return `${currIndex-1}, nums=[${array}]`
}

const test1 = [1,1,2]
const test2 = [0,0,0,1,1,1,2,2,3,3,4]
const test3 = []
const test4 = [0,1,1,1,1,1,2,2,13,13,14]


console.log( removeDuplicates(test4))