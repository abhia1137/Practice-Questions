
class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class DeadEnd {
    constructor() {
        this.root = null;
    }

    push(value) {
        var newNode = new Node(value)
        if (this.root == null) {
            this.root = newNode;

        } else {
            var current = this.root;
            if (value > 1) {
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
            } else {
                console.log('Dead End')
                return true
            }
        }
    }

    print() {
        console.log(this.root)
    }


}


let tree = new DeadEnd()
let arr = [10, 5, 25, 4, 68989, 0]
for (let i = 0; i < arr.length; i++) {
    tree.push(arr[i])
};

tree.print()
