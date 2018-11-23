function findDigits(n) {
    let item = n
let forIttrate = n.toString()
    let arr = [...forIttrate]
    let count = 0
    for (let i = 0; i < arr.length; i++) {
        if (item % parseInt(arr[i]) == 0) {
            count++
        }
    }
    console.log(count)
    // return count
}

findDigits("12")