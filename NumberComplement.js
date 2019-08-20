function NumberComplement(number) {
    let arr = [];
    let i = 0
    while (number > 0) {
        arr[i] = number % 2
        number = Math.floor(number / 2)
        i++
    }
    console.log(~arr.reverse().join('') & (1 << 32) - 1)
        // for (let i = 0; i < arr.length; i++) {
        //     if (arr[i] == 1) {
        //         arr[i] = 0
        //     } else {
        //         arr[i] = 1
        //     }
        // }
    return parseInt(arr.reverse().join('').toString(), 2)

    console.log(~parseInt(number.toString(2)))
        // return ~number
}

// console.log(NumberComplement(17))
console.log(NumberComplement(5))
    // console.log(NumberComplement(1))