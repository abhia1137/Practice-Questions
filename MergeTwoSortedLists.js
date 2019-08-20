let listOne = {
    val: 2,
    next: {
        val: 2,
        next: {
            val: 12,
            next: null
        }
    }
}

let listTwo = {
    val: 1,
    next: {
        val: 4,
        next: {
            val: 5,
            next: null
        }
    }
};

let mergerdList = {
    val: null,
    next: null
}

function MergeTwoSortedLists() {

    if (listOne.val > listTwo.val) {
        mergerdList.val = listTwo.val;
        // mergerdList = mergerdList.next
    } else if (listOne.val < listTwo.val) {
        mergerdList.val = listTwo.listTwo;
    }

    return mergerdList
};

console.log(MergeTwoSortedLists())