function moveAllZero(arr) {
let newArray =[]
let withoutZero = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == 0 ) {
            newArray.push(0)
        }else{
            withoutZero.push(arr[i])
        }
    }
    console.log(withoutZero.concat(newArray))
}
moveAllZero([1, 2, 0, 4, 3, 0, 5, 0])