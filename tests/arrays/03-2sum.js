

function towSum (array, target) {
    numMap = new Map()

    for (let i =0; i < array.length; i++) {
        let currNum = array[i]
        let diff = target - currNum

        if ( numMap.has(currNum) ) {
            return [i, numMap.get(currNum)].sort()
        } else {
            numMap.set(diff, i)
        }
    }
}


console.log(towSum([12, 0, -2, 4, 10, 14], 26))
