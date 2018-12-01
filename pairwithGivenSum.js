function leftRoration(arr, d) {
    for (let i = 0; i < d - 1; i++) {
        arr.push(arr[i])
        arr.splice(i - i, 1)
        
    }
    console.log(arr)
}

leftRoration([1, 2, 3, 4, 5], 2)