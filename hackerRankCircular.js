function hackerRankCircular(arr, rotationCount, queries) {
    let newArray = []

    for (let i = 0; i < rotationCount; i++) {
        newArray.push(arr[arr.length - rotationCount + i])
        arr.splice(arr.length - rotationCount + i, 1)
    }

    let allData = newArray.concat(arr)
    let myData = []
    for (let i = 0; i < queries.length + 1; i++) {
        // console.log(allData[i])
        myData.push(allData[i])
    }
    console.log(myData)
}

hackerRankCircular([1, 2, 3], 2, [1, 2])