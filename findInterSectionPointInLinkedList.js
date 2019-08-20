let listOne = {
    val: 1,
    next: {
        val: 2,
        next: {
            val: 3,
            next: {
                val: 4,
                next: {
                    val: 6,
                    next: null
                }
            }
        }
    }
};
let listTwo = {
    val: 2,
    next: {
        val: 4,
        next: {
            val: 6,
            next: {
                val: 8,
                next: null
            }
        }
    }
};

function calculateLength(list) {
    let length = 0
    while (list) {
        length++
        list = list.next;
    }
    return length
}

function findInterSectionPointInLinkedList(arr1, arr2) {
    let greaterLength = 0;
    if (calculateLength(listOne) > calculateLength(listTwo)) {
        greaterLength = calculateLength(listOne)
    } else {
        greaterLength = calculateLength(listTwo)
    }

    while (greaterLength) {
        if (listOne.val == listTwo.val) {
            console.log(listTwo.val)
            listTwo = listTwo.next
        }

        listOne = listOne.next
        greaterLength--
    }
};

findInterSectionPointInLinkedList(listOne, listTwo)