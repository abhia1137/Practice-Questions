
function cyclicArrayRotation(arr, d) {
    let newArray = []
    for (let i = 0; i <= d - 1; i++) {
        newArray.push(arr[arr.length - 1])
        arr.splice(arr.length - 1, 1)
    }
    console.log(newArray.concat(arr))
}

cyclicArrayRotation([1, 2, 3, 4, 5], 1)