const CircularQueue = require('../CircularQueue')

const queue = new CircularQueue(3)
const result = []

result.push(queue.enQueue(1))
result.push(queue.enQueue(2))
result.push(queue.enQueue(3))
result.push(queue.enQueue(4))
result.push(queue.rear())
result.push(queue.isFull())
result.push(queue.deQueue())
result.push(queue.enQueue(4))
result.push(queue.rear())

console.log(result)