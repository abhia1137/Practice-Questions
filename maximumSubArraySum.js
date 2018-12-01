function maximumSubArraySum(arr) {
    // let arr1 = [12, 11, -13, -5, 6, -7, 5, -3, -6]


    // console.log(arr1.sort())
    // let a = 4
    // let b = 2


    // console.log(~5)
    // let max_so_far = 0
    // let max_ending_here = 0

    // for (let i = 0; i < arr.length; i++) {
    //     max_ending_here = max_ending_here + arr[i]
    //     if (max_ending_here < 0) {
    //         max_ending_here = 0
    //     }
    //     if (max_so_far < max_ending_here) {
    //         max_so_far = max_ending_here
    //     }
    // }
    // console.log(max_so_far)

    let arr2 = []
    let arr1 = []
    let p = 0
    let n = 3
    for (let i = 0; i < 3; i++) {
        arr1[i] = [i]
        for (let j = 0; j < 3; j++) {
            arr1[i][j] = j

        }
        console.log(arr1[i])
    }

}

maximumSubArraySum([-2, -3, 4, -1, -2, 1, 5, -3])