function minimumSwaps(arr) {
    let newArray = arr
    
    
        arr.sort()
        console.log(newArray)    
    let min = 0

    // for (let i = 0; i < 1; i++) {
        
    //     min = returnMinimum(arr, i + 1)
    //     console.log('ok',newArray[0])
    //     // for (let j = 0; j < arr.length - 2; j++) {
    //     //     if (arr[i] > min) {
    //     //         console.log(arr[i], min)
    //     //     }
    //     // }
    //     // console.log(min)

    // }
}

minimumSwaps([3, 7, 6, 9, 1, 8, 10, 4, 2, 5])

function returnMinimum(arr, indexStart) {
    let newArray = arr
    let min = newArray.sort()
    // console.log(min[indexStart + 1])
    return min[indexStart + 1]
}   