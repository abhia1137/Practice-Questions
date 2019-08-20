let listOne = {
    val: 2,
    next: {
        val: 4,
        next: {
            val: 3,
            next: {
                val: 55,
                next: null
            }
        }
    }
};


// listOne.next.next.next = listOne


function detectLoop(list) {
    let list_one = list;
    let list_two = list
    while (list_one && list_two && list_two.next) {
        list_one = list_one.next;
        list_two = list_two.next.next;
        if (list_one == list_two) {
            // console.log('Found')
            return true
        }
    }
    return false
};

console.log(detectLoop(listOne))