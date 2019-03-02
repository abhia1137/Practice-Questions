class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

let tree1

class compareTwoTree {
    constructor() {
        this.root = null;

    }

    push(value, which) {

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
                tree1 = this.root
                

            }

        }

    }
    
}

class Node2 {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

let tree2
class treeTwo {
    constructor() {
        this.root2 = null;
    }
        
    insert(value) {
            
        if (!this.root2) {
            this.root2 = new Node2(value)
        } else {
            let current = this.root2
            while (true) {
                if (current.value > value) {
                    if (current.left == null) {
                        current.left = new Node2(value);
                        // console.log(this)
                        return this
                    } else {
                        current = current.left
                        // console.log(current)
                    }
                } else {
                    if (!current.right) {
                        current.right = new Node2(value);
                        // console.log(this)
                        return this
                    } else {
                        current = current.right

                    }

                }
                tree2 = this.root2
    

            }

        }
    
    }
    

    compareTwoTree(){
   
        console.log("Tree2",tree2,tree1)
        
        

        
    }
    
}





let tree = new compareTwoTree()
let trees1 = [10, 5, 40, 1, 7, 50]
for (let i = 0; i < trees1.length; i++) {
    tree.push(trees1[i], 'tree1')
};


let check = new treeTwo()
let trees2 = [10, 5, 40, 1, 7, 50]
for (let i = 0; i < trees2.length; i++) {
    check.insert(trees2[i], 'tree2')
}
check.compareTwoTree()