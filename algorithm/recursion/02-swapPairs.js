const { LinkedList } = require('../../data-structures/LinkedList')

var swapPairs = function(head) {
    if (head === null || head.next === null)   {
        return head
    }

    const firstNode = head
    const secondNode = head.next

    firstNode.next = swapPairs(secondNode.next)
    secondNode.next = firstNode

    return secondNode
};

const examples = {
    emptyArrays: { inputParams: [[]], expected: []},
    example1: { inputParams: [(new LinkedList().from([1, 2, 3, 4])).head], expected: new LinkedList().from([2,1,4,3])},
}

module.exports =  {
    examples,
    answer: swapPairs
}
