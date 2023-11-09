class Node {
    constructor(value = null, parent = null, left = null, right = null) {
        this.parent = parent
        this.left = left
        this.right = right
        this.value = value
    }
}

class BinaryTree {
    constructor() {
        this.root = new Node()
        this.items = []
    }

    addRight(parent, value) {
        const node = new Node(value, parent)
        parent.right = node
        return node
    }

    addLeft(parent, value) {
        const node = new Node(value, parent)
        parent.left = node
        return node
    }

    print() {
        this.traverse(this.root)
        console.log(this.items.join(' '))
    }

    traverse(node) {
       if (node.right) this.traverse(node.right)
       if (node.left) this.traverse(node.left)
       this.items.push(node.value)
    }

    printArray() {
        
    }
}

function run() {
    const tree = new BinaryTree()
    const a = tree.addRight(tree.root, 10)
    const b = tree.addLeft(tree.root, 11)
    tree.addRight(a, 20)
    tree.addLeft(a, 21)

    tree.print()
}

run()