function BinarySearch(arr, start, end, x) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] == x) {
        return mid;
    }
    if (x < arr[mid]) {
        return BinarySearch(arr, start, mid - 1, x)
    }
    return BinarySearch(arr, mid + 1, end, x)

};

function countOccurrences(arr, length, find) {
    let ind = BinarySearch(arr, 0, arr.length, find)
    console.log(arr.lastIndexOf(find) - arr.indexOf(find) + 1)
};

countOccurrences([1, 2, 2, 2, 2, 3, 4, 7, 8, 8], 8, 2)

// console.log(BinarySearch([1, 2, 3, 4, 5, 6, 7, 8], 0, 8, 3))