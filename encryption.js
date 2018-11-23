function encryption(s) {
    console.log(s)
    let row = Math.floor(Math.sqrt(s.length))
    let myArray = s.split('')
    console.log(myArray)
    let string = ''
    let newData = ''
    myUpperArray = []
    for (let i = 0; i < s.length; i++) {

        if (i !== row + 1) {
            console.log(myArray[i])
            myUpperArray.push(myArray[i])

        } else {
            myUpperArray.push(' ')
            myUpperArray.push(myArray[i])
            row = row + (row + 1)

        }

    }


    console.log(myUpperArray)
    let one = ''
    let two = ''
    let three = ''
    for (let i = 0; i < myUpperArray.length; i++) {
        if (i == row + 1) {
            let high = row + 1


        }
    }
    console.log(one)





























    // let low = Math.floor(Math.sqrt(s.length))
    // let low1 = Math.floor(Math.sqrt(s.length))

    // let endArray = []

    // let hight = low + 1

    // let high = low + 1


    // let multiply = low * high
    // endArray = s.split('')
    // // console.log(endArray)
    // let newArray = []
    // for (let i = 0; i < endArray.length; i++) {
    //     if (i == low) {
    //         newArray.push(endArray[i])
    //         newArray.push(' ')
    //         low = low + high
    //     } else {
    //         newArray.push(endArray[i])
    //     }
    // }

    // if (multiply <= newArray.length) {
    //     let difference = multiply - s.length
    //     console.log(Math.abs(difference))
    //     for (let i = 0; i < Math.abs(difference - 1); i++) {
    //         newArray.push(' ')
    //     }
    // }
    // console.log(newArray)

    // let res = []
    // let index
    // let data2
    // while ((index = newArray.indexOf(' ', index + 1)) > 0) {
    //     res.push(index);
    // }
    // console.log(res)
    // console.log(newArray)
    // let data 

}


// let last = arr.join(',').replace(/\,/g, "") + " " + arr1.join(',').replace(/\,/g, "") + " " + arr2.join(',').replace(/\,/g, "") + " " + arr3.join(',').replace(/\,/g, "")

// console.log(last)
// return last

encryption("feedthedog")
