class Node {
    constructor(value, prev = null, next = null) {
        this.value = value
        this.prev = prev
        this.next = next
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.size = 0
    }

    isEmpty() {
        return this.size === 0
    }


    addLast(value){
        const newNode = new Node(value)
        if (this.isEmpty()) {
            this.head = newNode
            this.tail = newNode
        } else {
            newNode.prev = this.tail
            this.tail = newNode
        }
        this.size++
    }

    addFirst(value) {
        const newHead = new Node(value)
        if (this.isEmpty()) {
            this.head = newHead
            this.tail = newHead
        } else {
            newHead.next = this.head
            this.head.prev = newHead
            this.head = newHead
        }
        this.size++
    }

    addAt(index, value) {
        const newNode = new Node(value)
        const oldNode = this.getAt(index-1)
        if (oldNode) {
            newNode.prev = oldNode
            newNode.next = oldNode.next
            oldNode.next = newNode
            this.size++
        }
    }

    getAt(index) {
        if (index < 0 || index > this.size) {
            return null
        }

        let node = this.head
        let i = 0

        while (i < index) {
            node = node.next
            i++
        }

        return node
    }

    removeAt() {
        
    }
    
    removeFirst() {

    }

    removeLast() {

    }

    find() {

    }

    toString() {
        const result = []
        let node = this.head
        console.log(node.next, node)
        while (node.next) {
            console.log('kk')
            result.push(node.value)
            node = node.next
        }
        console.log(result.toString())
    }
}

const doublyLinkedList = new DoublyLinkedList()
doublyLinkedList.addFirst(1)
doublyLinkedList.addLast(2)
doublyLinkedList.toString()