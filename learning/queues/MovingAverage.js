var MovingAverage = function(size) {
    this.array = []
    this.size = size
}

MovingAverage.prototype.next = function(val) {
    if (this.array.length === this.size ) {
        this.array.shift()
        this.array.push(val)
    } else {
        this.array.push(val)
    }
    return parseFloat((this.array.reduce((total, item) => item + total, 0)) / this.array.length).toFixed(5)
}

const obj = new MovingAverage(3)
const result = []
result.push(obj.next(1))
result.push(obj.next(10))
result.push(obj.next(3))
result.push(obj.next(5))

console.log(result)
