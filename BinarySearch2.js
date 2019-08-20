function BinarySearch2(arr, value) {
    if (!arr) return -1
    let start = 0;
    let end = arr.length - 1
    let middle = Math.floor((start + end) / 2)

    let i = 1
    while (arr[middle] != value && arr[i] != undefined) {
        if (value < arr[middle]) end = middle - 1
        else start = middle + 1
        middle = Math.floor((start + end) / 2)
        i++
    }
    return arr[middle] == value ? middle : -1

}
console.log(BinarySearch2([-1, 0, 3, 5, 9, 12], 12))