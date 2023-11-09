
class CircularQueue {
    constructor(k) {
        this.size = k 
        this.head = -1
        this.tail = -1
        this.array = []
    }

    enQueue(value) {
        if (this.isFull()) {
            return false
        }

        if (this.isEmpty()) {
            this.head = 0
        }
        
        this.tail = (this.tail + 1) % this.size
        this.array[this.tail] = value
        return true
        
    }

    deQueue() {
        if(this.isEmpty()) {
            return false
        }

        if(this.head === this.tail) {
            this.head = -1
            this.tail = -1
            return true
        }

        this.head = (this.head + 1) % this.size
        return true

    }

    isEmpty() {
        return this.head == -1
    }

    isFull() {
        return (this.tail + 1) % this.size === this.head
    }

    front() {
        if(this.isEmpty()) {
            return -1
        }
        return this.array[this.head]
    }

    rear() {
        if(this.isEmpty()) {
            return -1
        }
        return this.array[this.tail]
    }
}

module.exports = CircularQueue