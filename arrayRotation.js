// function arrayRotation(arr, d) {
//     let newArray = []
//     for (let i = 0; i <= d - 1; i++) {
//         newArray.push(arr[i - i])
//         arr.splice(i - i, 1)
//     }
//     console.log(arr.concat(newArray))
// }

// arrayRotation([1, 2, 3, 4, 5, 6, 7], 1)


function cyclicArrayRotation(arr, d) {
    let newArray =[]
    for (let i = 0; i < d; i++) {

        newArray.push(arr[arr.length - d + i])
        arr.splice(arr.length - d + i, 1)
    }
    console.log(newArray.concat(arr))
}

cyclicArrayRotation([1, 2, 3, 4, 5], 1)


//Time Complexity O(2)
