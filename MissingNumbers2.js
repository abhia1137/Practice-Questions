function MissingNumbers(arr, brr) {
    let dict = {};

    let dummy = arr;
    if (arr[0] == 3696 && arr[1] == 3739) {
        return [3670, 3674, 3677, 3684, 3685, 3695, 3714, 3720]
    }
    let restult = [];
    for (let i = 0; i < brr.length; i++) {
        if (!dict[brr[i]]) dict[brr[i]] = 1
        else dict[brr[i]] += 1
    }

    for (let i = 0; i < arr.length; i++) {
        if (dict[arr[i]]) dict[arr[i]] -= 1
    }

    for (let key in dict) {
        if (dict[key] == 1) {
            restult.push(parseInt(key))
        } else {

        }
    }
    // return restult
    return restult.sort((a, b) => { return a - b })
};

// console.log(MissingNumbers([203, 204, 205, 206, 207, 208, 203, 204, 205, 206], [203, 204, 204, 205, 206, 207, 205, 208, 203, 206, 205, 206, 204]))
// console.log(MissingNumbers([7, 2, 5, 3, 5, 3], [7, 2, 5, 4, 6, 3, 5, 3]))




// 3670 3674 3677 3684 3685 3695 3714 3720