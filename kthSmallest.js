

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class kthSmallest {
    constructor() {
        this.root = null;
    }


    insert(value, i) {
        if (!this.root) {
            this.root = new Node(value)
        } else {
            let current = this.root
            while (true) {
                if (current.value > value) {
                    if (current.left == null) {
                        current.left = new Node(value);
                        // console.log(this)
                        return this
                    } else {
                        current = current.left
                        // console.log(current)
                    }
                } else {
                    if (!current.right) {
                        current.right = new Node(value);
                        // console.log(this)
                        return this
                    } else {
                        current = current.right

                    }

                }
            }
        }
    }

    print() {
        console.log(this.root)
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

    oneChild() {
        function one(node) {
            if (!node) return false
            else {
                if (node.left && node.right) {
                    console.log(false)
                }else{
                    
                    one(node.left)
                    console.log(true)
                }
            }
        }

        one(this.root)
    }

}

let tree = new kthSmallest();
let arr = [20,10,11,13,12]
for (let i = 0; i < arr.length - 1; i++) {
    tree.insert(arr[i])
};

tree.insert()
tree.print()
tree.sort();
tree.oneChild()


//        20
//    8       22
// 4   12         
//  10    14