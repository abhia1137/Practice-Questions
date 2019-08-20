class Node {
    constructor(value) {
        this.value = value;
        this.next = null
    }
}

class firstLinked {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0
    }


    push(value) {
        let newNode = new Node(value)
        if (!this.head) {
            this.head = newNode
            this.tail = this.head
        } else {
            this.tail.next = newNode
            this.tail = newNode;
        }
        this.length++
    }

    print() {
        console.log(this.head)
    }

    getIndex(value) {
        let i = 1
        let forIndex = this.head
        while (forIndex) {
            if (forIndex.value == value) {
                return i
            }
            i++
            forIndex = forIndex.next
        };
        i = 0
        return -1
    };
    getValue(value) {
        let i = 1
        let forIndex = this.head
        while (forIndex) {
            if (i == value) {
                return forIndex
            }
            i++
            forIndex = forIndex.next
        };
        i = 0
        return -1
    };

    removeNode(node) {
        let previousValue = this.getValue(this.getIndex(node) - 1)
        previousValue.next = this.getValue(this.getIndex(node) + 1)
        this.head.next.next = previousValue
        return this.head
    };

    removeAtHead() {
        let removed = this.head.next
        console.log(removed)
    }
    findMiddle() {
        let mid = Math.floor(this.length / 2);
        let i = 1;
        while (i != mid) {
            i++
            this.head = this.head.next
        }
        console.log(this.head.value)
    };


    reverseList() {
        console.log(this.head == null)
        if (this.head == null) return []
        let node = this.head
        let previous, tmp;
        while (node) {
            tmp = node.next
            node.next = previous;
            previous = node;
            node = tmp;
        };
        return previous
    };




};
let arr = []
let list = new firstLinked()
list.push(11)
list.push(42)
list.push(35)
list.push(47)
list.push(15)
    // list.push(60)
    // list.push(43)
    // console.log(list.getValue(42))
    // console.log(list.getIndex(47))
    // console.log(list.getValue(2))
    // list.removeNode(47)
    // list.removeAtHead() 
    // console.log()
    // list.findMiddle()
    // console.log(list.circle())
console.log(list.reverseList(44))