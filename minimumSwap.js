function minimumSwap(arr, pivot) {
    let swap = 0
    let data = []
    for (let i = 0; i < arr.length; i++) {
        let swap = 0
        if (arr[i] > pivot) {
            for (let j = i + 1; j < arr.length; j++) {
                if (arr[j] <= pivot) {
                    let temp = arr[i]
                    arr[i] = arr[j]
                    arr[j] = temp
                    swap++
                    data.push(swap)
                }
            }
        }
    }
    let count = data.sort()
    console.log(count[count.length - 1])
}

minimumSwap([2, 1, 5, 6, 3], 3)