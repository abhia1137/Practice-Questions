function smallestAndLargest(arr1) {
    let arr = arr1.sort()
    let newArray = []
    for (let i = 0; i < Math.round((arr.length) / 2); i++) {
        newArray.push(arr[i])
        newArray.push(arr[arr.length - i - 1])
    }

    console.log(newArray)
}
smallestAndLargest([5, 8, 1, 4, 2, 9, 3, 7, 6])