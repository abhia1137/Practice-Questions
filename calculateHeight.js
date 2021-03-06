// 'use strict'
// var right = 0;
// var left = 0
// var end = 0
class Node {

    constructor(value) {
        this.value = value
        this.left = null;
        this.right = null;
    }
}


class HeightOfTree {

    constructor() {

        this.root = null;
        this.heightLeft = 0;

        this.heightRight = 0
    }

    push(value, i) {

        let newNode = new Node(value)
        if (this.root == null) {
            this.root = newNode;

        } else {
            let current = this.root;
            while (true) {
                if (value < current.value) {
                    if (current.left == null) {
                        current.left = new Node(value)
                        this.heightLeft++

                        return this
                    } else {
                        current = current.left
                    }
                } else {
                    if (current.right == null) {
                        current.right = new Node(value)
                        this.heightRight++

                        return this
                    } else {
                        current = current.right
                    }
                }

                if (i == trees1.length - 1) {
                    if (this.heightRight > this.heightLeft) {
                        data.push(this.heightRight)
                    } else {
                        data.push(this.heightLeft)
                    }
                }
            }
        }
    }
}

let data = []
const tree = new HeightOfTree();
const trees1 = [20, 10, 30, 5, 40,25,15]
for (let i = 0; i < trees1.length; i++) {

    tree.push(trees1[i], i)
};

console.log(data[0])
// tree.BFS()

//     // 10
// // 5      40
// //1 7        50
