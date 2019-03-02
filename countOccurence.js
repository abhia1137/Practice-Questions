class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}



class countOccurence {
    constructor() {
        this.head = null;
        this.tail = null
        this.length = 0
    };

    insert(value) {
        let newNode = new Node(value)
        if (!this.head) {
            this.head = newNode
            this.length++
            this.tail = newNode
        } else {
            this.tail.next = newNode;
            this.length++
            this.tail = newNode
        };
    };
    findFrequencyItrative(x) {
        let count = 0
        console.log(this)
        for (let i = 0; i < this.length; i++) {
            if (this.head.value == x) {
                count++
            }
            this.head = this.head.next
        }
        console.log(count)
    }

    findFrequencyRecursive(x) {
        let count = 0;
        function frequency(list) {
            if (list.head) {
                if (list.head.value == x) {
                    count++
                }
                list.head = list.head.next;
                frequency(list)
            }
        };
        frequency(this)
        console.log(count)
    };
};


let list = new countOccurence()

let arr = [1, 2, 1, 2, 1, 3, 1]
for (let i = 0; i < arr.length; i++) {
    list.insert(arr[i])
}
// list.findFrequencyItrative(2)
// list.findFrequencyRecursive()
list.findFrequencyRecursive(1)
