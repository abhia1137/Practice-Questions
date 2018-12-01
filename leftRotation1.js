function leftRoration(arr, d) {

    for (let i = 0; i <= d - 1; i++) {
        arr.push(arr[i - i])
        arr.splice(0, 1)

    }
    console.log(arr)
}

leftRoration([1, 2, 3, 4, 5], 2)