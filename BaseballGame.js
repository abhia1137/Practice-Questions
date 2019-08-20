function BaseballGame(list) {
    let i = 0;
    let points = 0
    let resultArray = [];
    if (!list) {
        return 0
    }
    while (list[i]) {
        if (list[i] == 'C') {
            list.splice(i, 1)
            resultArray.splice(resultArray.indexOf(list[i]), 1)
            i--
        } else if (list[i] == 'D') {
            resultArray.push(resultArray[resultArray.length - 1] * 2)
        } else if (list[i] == '+') {
            resultArray.push(resultArray[resultArray.length - 1] + resultArray[resultArray.length - 2])
        } else {
            resultArray.push(parseInt(list[i]))
        }
        i++
    }
    points = getSum(resultArray)
    return points
}


function getSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    return sum
}

console.log(BaseballGame(["5", "2", "C", "D", "+"]))
    // "5", "-2", "4", 'C', 'D', '9', '+', '+'
    // "4", "C", "D", "9", "+", "+"