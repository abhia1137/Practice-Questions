let listOne = {
    val: 2,
    next: {
        val: 4,
        next: {
            val: 4,
            next: {
                val: 99,
                next: null
            }
        }
    }
};

function reverelist() {
    let node = listOne
    let previous, tmp;
    while (node) {
        tmp = node.next
        node.next = previous;
        previous = node;
        node = tmp;
    };
    return previous
};

function checkPanlindrome() {
    let newList = reverelist();
    while (newList && listOne) {
        if (newList.val != listOne.val) {
            return false
        }
        newList = newList.next;
        listOne = listOne.next
    }
    return true
}

// console.log(checkPanlindrome(listOne));



function removeDuplicateFromLinkedList() {

};



function removeDuplicate(arr) {
    arr.push(arr[arr.length - 1])
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] != arr[i - 1]) {
            arr.splice(i - 1, 1)
                // i--
        }
    };
    console.log(arr)
};

removeDuplicate([1, 1, 3, 3, 4, 5])