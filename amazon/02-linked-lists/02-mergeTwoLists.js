const { LinkedList, Node} = require('../../data-structures/LinkedList')

// Recursive Approach
var mergeTwoListsRecursive = function(list1, list2) {
    if (list1 === undefined) {
        return list2
    } else if (list2 === undefined) {
        return list1
    } else if (list1.val < list2.val) {
        list1.next = mergeTwoListsRecursive(list1.next, list2)
        return list1
    } else  {
        list2.next = mergeTwoListsRecursive(list1, list2.next)
        return list2
    }
};

// Recursive Approach
var mergeTwoListsIteration = function(list1, list2) {
    let preHead = new Node(-1)
    
    while (list1.next || list2.next) {
        if (list1.val <= list2.val) {
            head = null
        }
    }
};


const examples = {
    example1: { inputParams: [new LinkedList().from([1,2,4]), new LinkedList().from([1,3,4])], expected: [1,1,2,3,4,4] },
    // example2: { inputParams: [[], []], expected: [] },
    // example3: { inputParams: [[], [0]], expected: [0] }
}

module.exports =  {
    examples,
    answer: mergeTwoListsRecursive
}
