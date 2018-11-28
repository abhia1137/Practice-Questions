function quickSort(unsorted) {
    // let pivot = unsorted[0]
    // let swap = 0
    // for (let i = 0; i < unsorted.length; i++) {
    //     if (unsorted[i] > pivot) {

    //         for (let j = unsorted.length; j > 0; j--) {

    //             if (i != j) {
    //                 if (unsorted[j] < pivot) {
    //                     let temp = unsorted[i]
    //                     unsorted[i] = unsorted[j]
    //                     unsorted[j] = temp
    //                     swap++
    //                 }
    //             }
    //         }
    //     }
    // }
    // console.log(unsorted)
    // console.log(swap)
}
quickSort([2, 1, 5, 6, 3])

// function moveAllZero(arr) {
//     let newArray =[]
//     let withoutZero = []
//         for (let i = 0; i < arr.length; i++) {
//             if (arr[i] == 0 ) {
//                 newArray.push(0)
//             }else{
//                 withoutZero.push(arr[i])
//             }
//         }
//         console.log(withoutZero.concat(newArray))
//     }
//     moveAllZero([1, 2, 0, 4, 3, 0, 5, 0])