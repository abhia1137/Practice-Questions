
class Node {
    constructor(value) {
        this.value = value
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;

    }
        insert(value) {
            var newNode = new Node(value)
            if (this.root == null) {
                this.root = newNode;

            } else {
                var current = this.root;
                while (true) {
                    if (value < current.value) {
                        if (current.left == null) {
                            current.left = new Node(value)
                            return this
                        } else {
                            current = current.left

                        }
                    } else {
                        if (current.right == null) {
                            current.right = new Node(value)
                            // console.log(this)
                            return this
                        } else {
                            current = current.right
                        }
                    }
                }
            }

        }

    search(value) {
        if (this.root == null) {
            console.log("Empty Tree")

        } else {
            var current = this.root
                , found = false
            while (current && !found) {
                if (value < current.value) {
                    current = current.left
                } else if (value > current.value) {
                    current = current.right
                } else {

                    found = true

                }

            }
            if (!found) return undefined

            return current
        }
    }

    BFS() {
        let data = [],
            queue = [],
            node = this.root;

        queue.push(this.root);
        console.log(queue)
        while (queue.length) {
            node = queue.shift()
            data.push(node.value);
            if (node.left) queue.push(node.left)
            if (node.right) queue.push(node.right)
        }
        console.log(data)

    }

    DFSPreOrder() {
        var data = [];
        function traiverse(node) {
            data.push(node.value)
            if (node.left) traiverse(node.left)
            if (node.right) traiverse(node.right)
        }
        traiverse(this.root)
        console.log("Pre-Order",data)
        return data
    }

    DFSPostOrder() {
        let data = []
        function traiverse(node) {
            if (node.left) traiverse(node.left)
            if (node.right) traiverse(node.right)
            data.push(node.value)
        }
        traiverse(this.root)
        console.log("PostOrder",data)
    }

    DFSInorder(){
        let data = []
        function traiverse(node) {
            if (node.left) traiverse(node.left)
            data.push(node.value)
            if (node.right) traiverse(node.right)
            
        }
        traiverse(this.root)
        console.log("InOrder",data)
    }
}

let tree = new BinarySearchTree()

tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);
tree.DFSPreOrder()
tree.DFSPostOrder()
tree.DFSInorder()
// delete(value) {
    //     if (this.root == null) {
    //         console.log('Empty tree')
    //     }
    //     else {
    //         let current = this.root
    //             , found = false
    //         while (current && !found) {
    //             if (value < current.value) {
    //                 current = current.left
    //             } else if (value > current.value) {
    //                 current = current.right
    //             } else {

    //                 found = true

    //             }

    //         }
    //         if (!found) return undefined
    //         current.value = null
    //         return current
    //     }
    // }