
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

var addTwoNumbers = function(l1, l2) {
    const dummyHead = new ListNode(0)
    let curr = dummyHead
    let carry = 0

    while (l1 != null || l2 != null || carry != 0) {
        let x = (l1 != null) ? l1.val : 0
        let y = (l2 != null) ? l2.val : 0
        let sum = carry + x + y
        carry = sum / 10
        curr.next = new ListNode(sum % 10)
        curr = curr.next
        if (l1 != null) {
            l1 = l1.next
        } 
        if (l2 != null) {
            l2 = l2.next
        }
    }

    return dummyHead.next
};

const examples = {
    example1: { inputParams: [[2,4,3], [5,6,4]], expected: [7,0,8] },
    example2: { inputParams: [[0], [0]], expected: [0] },
    example3: { inputParams: [[9,9,9,9,9,9,9], [9,9,9,9]], expected: [8,9,9,9,0,0,0,1] }
}

module.exports =  {
    examples,
    answer: addTwoNumbers
}
