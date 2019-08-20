let listOne = {
    val: 2,
    next: {
        val: 4,
        next: {
            val: 4,
            next: {
                val: 43,
                next: {
                    val: 41,
                    next: {
                        val: 41,
                        next: null
                    }
                }
            }
        }
    }
};

function moveLastToFirstLinkedList(list) {
    let newList = list;
    let temp
    while (newList) {
        if (newList.next.next == null) {
            temp = newList.next
            newList.next = null;
            break
        }
        newList = newList.next
    };
    temp.next = list;
};

console.log(moveLastToFirstLinkedList(listOne))