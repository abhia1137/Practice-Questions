function RotationCount(arr) {
    let temp = arr[0]
    let end = 0
    for (let i = 0; i < arr.length; i++) {
        if (temp > arr[i]) {
            temp = i
        }
    }

    console.log(arr.length - (arr.length - temp))
}
RotationCount([15, 18, 2, 3, 6, 12])



