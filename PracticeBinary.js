// class Node {
//     constructor(value) {
//         this.value = value;
//         this.left = null;
//         this.right = null;
//     }
// }
// let min = 0;
// let max = 0;
// let data = []
// class BinaryTree {
//     constructor() {
//         this.root = null
//     }
//     // insert(value) {
//     //     if (this.root == null) {
//     //         this.root = new Node(value)
//     //         console.log(this)

//     //     } else {
//     //         let current = this.root;
//     //         while (true) {
//     //             if (value < current.value) {
//     //                 if (current.left == null) {
//     //                     current.left = new Node(value);
//     //                     console.log(this)
//     //                     min = current.left.value
//     //                     data.push(current.left.value)
//     //                     return this
//     //                 } else {
//     //                     current = current.left
//     //                     return this
//     //                 }
//     //             } else if (value > current.value) {
//     //                 if (current.right == null) {
//     //                     current.right = new Node(value)
//     //                     data.push(current.right.value)
//     //                     max = current.right.value;

//     //                     return this
//     //                 } else {
//     //                     current = current.right
//     //                 }
//     //             }
//     //         }
//     //     }

//     // }



//     ArrayToBst(arr) {
//         let first = 0
//         let last = arr.length
//         let mid = Math.floor((first + last) / 2)
//         console.log(arr[mid])
//         let current = new Node(arr[mid])

//         for (let i = 0; i < arr.length; i++) {
//             if (arr[i] != arr[mid]) {
//                 if (arr[mid] > arr[i]) {
//                     if (current.left == null) {
//                         current.left = new Node(arr[i])
//                         console.log(current)
//                         last = mid -1
//                         mid =  Math.floor((first + last) / 2)
//                     } else {
//                         current = current.left
//                     }

//                 } else {
//                     current.right = new Node(arr[i])

//                 }
//             }
//         }
//         console.log(current)

//     }

// }

// let tree = new BinaryTree()

// tree.ArrayToBst([1, 2, 3, 4])




class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;

    }
}

class BinaryTreeToBST {
    constructor() {
        this.root = null;
    }


    push(value) {
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
        // console.log(this)
    }


    // converstion(value) {
    //     console.log(value)
    // }

    

    structure(value){
    let manual = new Node(value)
        
        manual.left = new Node(2)
        manual.right = new Node(7)
        manual.left.left = new Node(8)
        manual.left.right = new Node(4)

        console.log(manual)
        this.root = manual
    }

    DFSInorder(){
        let data = []
        function traiverse(node) {
            if (node.left) traiverse(node.left)
            if (node.right) traiverse(node.right)
            data.push(node.value)
            
        }
        traiverse(this.root)
        console.log("InOrder",data)
        console.log(this.root)
        
    }


}
let tree = new BinaryTreeToBST()

tree.structure(10)
tree.DFSInorder()

