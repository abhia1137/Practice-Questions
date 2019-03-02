class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class DetermineBST {
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

    print(value) {
        // console.log(this.root)
    }

    checkBinaryTree(tree1) {
        let i = 0
        let j = 0





    }

    leftHeight() {
        let i = 0;
        let j = 0;
        function calculate(node) {
            if (!node) {
                return 0;
            } else {
                i = calculate(node.left) + 1
                j = calculate(node.right) + 1
            }
            if (i > j) {
                return i
            } else {
                return j
            }
        }

        calculate(this.root)
        console.log(i - 1, j - 1)
    }

    sort() {
        let data = []
        function getValues(node) {
            if (node.left) getValues(node.left);
            data.push(node.value)
            if (node.right) getValues(node.right);
        }
        getValues(this.root)

        console.log(data)
    }

    kthSmallest() {
        function one(node) {
            if (!node) return false
            else {
                if (node.left && node.right) {
                    console.log(false)
                } else {
                    one(node.left)
                    console.log(true)
                }
            }
        }

        one(this.root)
    }

}

let tree = new DetermineBST()
const trees1 = [20,25,10]
for (let i = 0; i < trees1.length; i++) {
    tree.insert(trees1[i], i)
};
tree.print()
tree.checkBinaryTree(trees1)
tree.leftHeight();
tree.sort();
tree.kthSmallest()
//     20
//  10    30
//5      25   40