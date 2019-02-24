class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}


class singleLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0
    }

    push(val) {
        let newNode = new Node(val)
        if (!this.head) {
            this.head = new Node(val);
            this.tail = this.head
        }else{
            this.tail.next = newNode
            this.tail = newNode
        }
        this.length++
        console.log(this.head)
    }
}

let list = new singleLinkedList()
list.push(1)

list.push(2)
list.push(33)
list.push(44)