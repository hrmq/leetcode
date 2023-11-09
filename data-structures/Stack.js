class Stack {
    constructor(n) {
        this.array = []
        for (let i = 0; i < n; i++) {
            this.array[i] = null
        }
        this.topA = 0
        this.topB = this.array.length - 1
        console.log(this.topB)
    }

    popA() {
        if (this.topA === 0) {
            console.log('stack is empty')
            return
        }
        let item = this.array[this.topA]
        this.topA--
        console.log('Pop A', item)
        return item
    }

    pushA(item) {
        if (this.topA + 1 === this.topB) {
            console.log('stack is full')
            return
        }
        this.array[this.topA] = item
        console.log('PushA', item)
        this.topA++
    }

    popB(){
        if (this.topB === this.array.length - 1) {
            console.log('stack is empty')
            return
        }
        let item = this.array[this.topB]
        console.log('Pop B', item)
        this.topB++
        return item
    }

    pushB() {
        console.log(this.topB - 1,this.topA)
        if (this.topB - 1 === this.topA) {
            console.log('stack is full')
            return
        }
        this.array[this.topB] = item
        console.log('PushB', item)
        this.topB--
    }
}

const myStack = new Stack(5)
myStack.popA()
myStack.popB()
myStack.pushA(1)
myStack.pushA(2)
myStack.pushA(3)
myStack.pushB(4)
myStack.pushB(5)
myStack.pushB(6)

