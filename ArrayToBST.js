class Node {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null
    }
    convert(value, start, end) {

        let newNode = new Node(value)
        start = 0
        end = value.length - 1
        let mid = Math.floor((start + end) / 2)
        newNode.value = value[mid]
        // newNode.left = convert(value, start, mid - 1)
        console.log(newNode)
        return newNode.left


    }
}

let tree = new BinarySearchTree()
tree.convert([1, 2, 3])