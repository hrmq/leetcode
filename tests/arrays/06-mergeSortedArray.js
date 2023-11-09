
var merge = function(nums1, m, nums2, n) {
    let lastItem = m - 1
    let counter = 0
    let len = m + n
    let secondArrayItem = nums2.shift()
    console.log(secondArrayItem)

    while ( counter < len ) {
        console.log('1=>', nums1[counter] , secondArrayItem)
        if (nums1[counter] > secondArrayItem) {    
            console.log('2=>', lastItem, counter)
            for (let i = lastItem; i >= counter; i--) {
                console.log('3=>')
                nums1[lastItem + 1 ] = nums1[lastItem]
            }
            nums1[counter] = secondArrayItem
            secondArrayItem = nums2.shift()
        }
        counter++
    }

    return nums1
    
}

const nums1 = [1,2,3,0,0,0]
const m = 3
const nums2 = [2,5,6]
const n = 3
console.log(merge(nums1, m, nums2, n))