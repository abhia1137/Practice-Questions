function MajorityElement(arr) {
    let nby2 = Math.round(arr.length / 2)
    if (arr.length == 0) { return 0 }
    for (let i = 0; i < arr.length; i++) {
        if (nby2 == findIndividual(arr, arr[i])) {
            return arr[i]
        }
    };
}

function findIndividual(arr, number) {
    let count = 0;
    let nby2 = Math.round(arr.length / 2)
    for (let i = 0; i < arr.length; i++) {
        if (number == arr[i]) {
            if (count == nby2) {
                return count
            }
            count++
        }
    }
    return count
}

console.log(MajorityElement([2, 2]))