function repeatedString(s, n) {
    let newString = []
    newString = s.split('')
    let endString = []
    let allA = []

    let I = 42
    let j;
    j = ++I
    console.log(j)


    // for (let i = 0; i < Math.abs(n / newString.length); i++) {
    //     for (let j = 0; j < newString.length; j++) {
    //         if (endString.length < n) {
    //             endString.push(newString[j])
    //             if (endString[j] == 'a') {
    //                 allA.push(endString[j])
    //             }
    //         }
    //     }
    // }


    // const as = s.split('').filter(c => c == 'a').length

    // const times = parseInt(n / s.length)

    // const rest = n % s.length


    // const totalAs = times * as + s.slice(0, rest).split('').filter(c => c === 'a').length
    // // console.log(totalAs)
    // return totalAs
    // var items = [
    //     [1, 2],
    //     [3, 4],
    //     [5, 6]
    // ];
    // let myArray = []
    // for (let i = 0; i < items.length; i++) {

    //     myArray.push(items[i])
    //     console.log(items[i])
    // }
    // console.log(items);
    // let lastArray = []
    // let p = 0
    // for (let i = 0; i < items.length; i++) {
    //     let newArray = []

    //     // newArray.push([])
    //     for (let j = 1 + p; j <= 4 + p; j++) {
    //         // newArray[i][j]  = 'd'

    //         if (newArray.length < 3) {
    //             newArray.push(j)
    //             p = j
    //         }
    //     }
    //     console.log(newArray)
    //     // lastArray.push(newArray)
    // }

    // let unSortedArray = [2, 3, 8, 1, 4, 5, 9, 7, 6]

    // for (let j = 0; j < unSortedArray.length; j++) {
    //     for (let i = 0; i < unSortedArray.length; i++) {
    //         if (unSortedArray[i] < unSortedArray[i + 1]) {
    //             let temp = unSortedArray[i]
    //             unSortedArray[i] = unSortedArray[i + 1]
    //             unSortedArray[i + 1] = temp
    //         }


    //     }
    // }
    function recursion(a) {
        if (a > 0 && a < 10) {
            console.log(a)

        }
    }

    // console.log(unSortedArray)

    // console.log(lastArray)
}

repeatedString('a', 1000000000)


