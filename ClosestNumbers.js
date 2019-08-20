function ClosestNumbers(arr) {
    arr.sort((a, b) => { return a - b })
    let minDistance = minisDiff(arr)
    let resultArray = [];
    for (let i = 0; i < arr.length; i++) {
        if (Math.abs(arr[i] - arr[i + 1]) == minDistance) {
            resultArray.push(arr[i], arr[i + 1])
        }
    }
    return resultArray
};


function minisDiff(arr) {
    let diff = Math.abs(arr[0] - arr[1]);
    for (let i = 0; i < arr.length; i++) {
        if (diff > Math.abs(arr[i] - arr[i + 1])) {
            diff = Math.abs(arr[i] - arr[i + 1])
        }
    }
    return diff
}

console.log(ClosestNumbers([5, 4, 3, 2]))
20, -3916237, -357920, -3620601, 7374819, -7330761, 30, 6246457, -6461594, 266854, -520, -470