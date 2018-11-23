function countingValleys(n, s) {
    let arr1 = [...s]
    let level = 0
    let count= 0
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] == 'U') {
            ++level
        }
        if (arr1[i] == 'D') {
            level--
        }
        if (level == 0 && arr1[i] == 'U') {
            count++
        }
    }
    // console.log(count)
    return count
}
countingValleys(8, 'UDDDUDUU')