function arrayRotation(arr, d) {
    let newArray = []
    for (let i = 0; i <= d - 1; i++) {
        newArray.push(arr[i - i])
        arr.splice(i - i, 1)
    }
    console.log(arr.concat(newArray))
}

arrayRotation([1, 2, 3, 4, 5, 6, 7], 1)



//Time Complexity O(2)