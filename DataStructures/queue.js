var Queue = function(capacity) {
    this.capacity = capacity || Infinity
    this._storage = {}
    this._head = 0
    this._tail = 0
}

Queue.prototype.enque = function(value) {

    if (this.count() < this.capacity) {
        this._storage[this._tail++] = value
        return this.count();
    }
    return "Maximum Capacity already reached, remove one item to add new one."
}

Queue.prototype.deque = function() {
    if (this.count() === 0) {
        return "Already empty, no item to remove"
    }
    var firstItem = this._storage[this._head]
    delete this._storage[this._head++]
    return firstItem
}

Queue.prototype.count = function() {
    return this._tail - this._head
}

Queue.prototype.peek = function() {
    return this._storage[this._head]
}

Queue.prototype.printValues = function() {
    for (let i = this._head; i < this._tail; i ++) {
        console.log(this._storage[i])
    }
}

console.clear()
var que = new Queue()
que.enque(5)
que.enque(4)
que.enque(6)

que.printValues()

console.log(que.deque())
console.log(que.deque())
console.log(que.deque())
console.log(que.deque())
que.printValues()
que.enque(11)
que.printValues()