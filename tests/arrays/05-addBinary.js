

function addBinary(a, b) {
    const aBinary = a.split('')
    const bBinary = b.split('')
    let result = []

    let aIndex = aBinary.length
    let bIndex = bBinary.length 
    let carryOver = 0
    let digit = 0

    while (aIndex > 0 || bIndex > 0 ) {
        let first = +aBinary[aIndex-1]
        let second = +bBinary[bIndex-1]
        
        if (!(first ^ second)) {
            digit = carryOver 
            carryOver = first & second
        } else {
            digit = carryOver ? 0 : 1 
        }

        aIndex--
        bIndex--
        result.push(digit)
    }

    if (carryOver) result.push(carryOver)
    return result.reverse().join('')
}

const a = '111'
const b = '1'

console.log(addBinary(a, b))