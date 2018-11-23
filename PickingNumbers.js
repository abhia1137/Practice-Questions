function migratoryBirds(arr) {
    let totalBirds = 0
    let birdCount = 0
    let maxCount = 0
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] == arr[j]) {
                birdCount++
            }

        }
        if (birdCount > maxCount) {
            maxCount = birdCount
            if (arr[i] > totalBirds) {
                totalBirds = arr[i]
            }

        }
        birdCount = 0
    }
    // return totalBirds,
    console.log(totalBirds)
}

migratoryBirds([2, 2, 2, 2, 3, 3, 3, 3, 3,])