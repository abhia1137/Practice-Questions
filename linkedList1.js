class Node {
    constructor(value) {
        this.value = value;
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0
    }

    push(value, list) {
        if (list == 'listone') {
            let newNode = new Node(value);
            if (!this.head) {
                this.head = newNode;
                this.length++
                this.tail = this.head;
            } else {
                this.tail.next = newNode;
                this.tail = newNode
                this.length++
            }
        } else {
            let newNode = new Node(value);
            if (!secondList.head) {
                secondList.head = newNode
                secondListlength++
                secondList.tail = secondList.head

            } else {
                secondList.tail.next = newNode
                secondList.tail = newNode
                secondListlength++
            }
        }
    }

    print() {
        // if (this.length % 2 == 1) {
        //     console.log('ODD', this.length)
        // } else {
        //     console.log('EVEN', this.length)
        // }
        firstList = this
        console.log("firstlist", firstList)
        console.log("second list", secondList)
    }

    compateLinkedListItrative() {
        let j = 0;
        let k = 0
        if (this.length == secondListlength) {
            for (let i = 0; i < this.length; i++) {
                if (this.head.value == secondList.head.value) {
                    j++
                    this.head = this.head.next
                    secondList.head = secondList.head.next
                    if (j == this.length) {
                        console.log('Identical')
                    }
                } else {
                    k++
                    if (k == this.length) {
                        console.log('Not Identical')
                    }
                }
            }
        } else {
            console.log('Not Identical')
        }

    }

    compareLinkedListRecursive() {
        let i = 0;
        let j = 0

        function checkBothList(list1, list2) {
            if (!list1) {
                return null
            } else {
                if (list1.head && list2.head) {
                    if (list1.head.value == list2.head.value) {
                        list1.head = list1.head.next;
                        list2.head = list2.head.next;
                        i++
                        checkBothList(list1, list2)

                    } else {
                        console.log('Not Identical')
                    }

                }
            }
        }
        checkBothList(this, secondList)
    };
    //count pairs whoes sum is x in both likedList
    countPairsItrative(x) {
        let lastlist = Object.assign({}, this);
        let smalllistLength
        dummyList = Object.assign({}, this);
        let pairs = 0
        if (this.length < secondListlength) {
            smalllistLength = this.length
        } else {
            smalllistLength = secondListlength
        }
        for (let i = 0; i < smalllistLength; i++) {
            for (let j = 0; j < this.length; j++) {
                if (secondList.head.value + dummyList.head.value == x) {
                    pairs++
                }
                if (dummyList.head.next) {
                    dummyList.head = dummyList.head.next
                }
            };
            dummyList = {}
            dummyList = Object.assign({}, lastlist);
            secondList.head = secondList.head.next
        };
        console.log(pairs)
    };

    counPairsRecursive() {
        function countPairs(list1, list2) {
            console.log(list1.head.value)
            if(list1.head.next){
                list1.head = list1.head.next
                countPairs(list1)
            }        
        };
        countPairs(this, secondList)
    };
};

let list = new LinkedList()
let listone = 'listone'
let firstList = {}
let dummyList = {}
let secondList = {}
secondListlength = 0
let arr = [7, 5, 1, 3]
let checkArray = [3, 5, 2, 8]
for (let i = 0; i < arr.length; i++) {
    list.push(arr[i], 'listone')
}
for (let i = 0; i < checkArray.length; i++) {
    list.push(checkArray[i], 'listtwo')
}
list.counPairsRecursive()
// list.countPairsItrative(10)
// list.print()
// list.compateLinkedListItrative()

// list.compareLinkedListRecursive()



