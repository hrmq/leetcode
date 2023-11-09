
class Node {
    constructor(val, next = null) {
        this.val = val
        this.next = next
    }
}

class LinkedList {
    constructor() {
        this.head = null
        this.size = 0
    }
    
    insert(element) {
        const node = new Node(element)
        let curr
        
        if (this.head === null) {
            this.head = node
        } else {
            curr = this.head
            while (curr.next) {
                curr = curr.next
            }
            curr.next = node
        }
        this.size++
    }

    from(array) {
        array.forEach(ele => this.insert(ele))
        return this
    }

    deleteFirst() {
        if (!this.head) return
        this.head = this.head.next
        return this.head
    }

    deleteLast() {
        if (!this.head) return

        if (!this.head.next) {
            this.head = null
            return
        }
        
        let prev = this.head
        let tail = this.head.next

        while (tail.next !== null) {
            prev = tail
            last = tail.next
        }

        prev.next = null
        return tail
    }

    getAt(index) {
        let counter = 0
        let node = this.head

        while (node) {
            if (counter === index) {
                return node
            }
            counter++
            node = node.next
        }
        return null
    }

    insertAt(data, index) {
        if (!this.head) {
            this.head = new Node(data)
            return
        }

        if (index === 0) {
            this.head = new Node(data, this.head)
            return
        }

        let prev = this.getAt(index-1)
        let newNode = new Node(data)
        newNode.next = prev.next
        prev.next = newNode
    }

    print() {
        let curr = this.head
        while(curr.next) {
            console.log(curr.val)
            curr = curr.next
        }
        console.log(curr.val)
    }

    toArray() {
        const arr = []
        let curr = this.head
        while (curr.next) {
            arr.push(curr.val)
            curr = curr.next
        }
        arr.push(curr.val)
        return arr
    }

}

module.exports = {
    LinkedList,
    Node
}