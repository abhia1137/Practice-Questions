let listOne = {
    val: 2,
    next: {
        val: 4,
        next: {
            val: 3,
            next: null
        }
    }
};

let listTwo = {
    val: 5,
    next: { val: 6, next: { val: 4, next: null } }
}
let strOne = ''
let strTwo = ''
while (listOne) {
    strOne += listOne.val
    listOne = listOne.next
}
while (listTwo) {
    strTwo += listTwo.val
    listTwo = listTwo.next
}
console.log(parseInt(strOne.split('').reverse().join().replace(/,/g, '')) + parseInt(strTwo.split('').reverse().join().replace(/,/g, '')))