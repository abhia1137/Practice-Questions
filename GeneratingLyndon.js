// // function GeneratingLyndon(arr, d) {
// //     let newArray = arr.split('')

// //     let temp = newArray[0]
// //     for (let i = 0; i < d - 1; i++) {

// //     }

// //     console.log(newArray)
// // }

// // GeneratingLyndon('120', 2)

// function cyclicArrayRotation(arr, d) {
//     let newArray = []
//     for (let i = 0; i <= d - 1; i++) {
//         newArray.push(arr[arr.length - 1])
//         arr.splice(arr.length - 1, 1)
//     }
//     let data = []
//     data.push(newArray.concat(arr).toString().replace(/\,/g, ""))

//     let temp = parseInt(data[0])
//     for (let i = 0; i < data.length; i++) {
//         if (temp < parseInt(data[i])) {

//             temp = parseInt(data[i])
//         }
//     }
//     console.log(',Temp',temp)
// }

// for (let i = 0; i < 4; i++) {
//     cyclicArrayRotation([54, 546, 548, 60], i)
// }





function layDen(str, d) {
    console.log(str.split(''))
    let myArray = str.split('')
    // let temp = parseInt(myArray[0], myArray[1])
    let newData = []
    let temp
    for (let i = 0; i < 1; i++) {
        temp = myArray[i]
        temp += myArray[i + 1]
        myArray.splice(myArray.length - 1 - i, 1)
        myArray = str.split('')
        
    }

    console.log(temp)
}
layDen('012', 2)