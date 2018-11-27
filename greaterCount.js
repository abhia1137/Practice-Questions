// let compare = []
// let d = 2
function greaterCount(arr1, d) {

    //     let newArray = []

    //     let arr = str.split('')

    //     for (let i = 0; i <= d - 1; i++) {
    //         newArray.push(arr[arr.length - i - 1])

    //         arr.splice(arr.length - i - 1, 1)
    //         console.log(newArray.concat(arr))
    //     }

    // }
    // for (let i = 0; i < d - 1; i++) {
    //     greaterCount('123',1)
    //}

    let newArray = []
    let arr = arr1.split('')
    let data = []
    // while (i < 1) {
    let myArray = []
    for (let i = 0; i < d; i++) {

        newArray.push(arr[arr.length - d + i])
        arr.splice(arr.length - d + i, 1)
        if (i == 0) {
            myArray.push(parseInt(newArray.concat(arr).reverse().join().replace(/\,/g, '')))
        } else {
            myArray.push(parseInt(newArray.concat(arr).join().replace(/\,/g, '')))
        }
    }
    console.log(myArray)

}
greaterCount('2214', 2)