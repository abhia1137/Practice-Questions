function HeightChecker(arr) {
    let original = []
    original = [...arr]
    arr.sort((a, b) => { return a - b });
    console.log(arr)
    console.log(original);

    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (original[i] != arr[i]) {
            count++
        }
    }
    return count
};
console.log(HeightChecker([10, 6, 6, 10, 10, 9, 8, 8, 3, 3, 8, 2, 1, 5, 1, 9, 5, 2, 7, 4, 7, 7]))