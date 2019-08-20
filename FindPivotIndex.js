function FindPivotIndex(nums) {
    // var sumOne = arr[0];
    // var sumTwo = arr[arr.length - 1]
    // var start = 0;
    // var end = arr.length - 1
    // if (arr.length == 0) {
    //     return -1
    // }
    // while (start != end) {
    //     if (sumOne > sumTwo) {
    //         sumTwo += arr[end - 1];
    //         end--
    //     } else {
    //         sumOne += arr[start + 1];
    //         start++
    //     }
    // };
    // console.log(start, end, sumOne, sumTwo)
    // if (sumOne == sumTwo) {
    //     return (start + 1) != -1 ? start : -1
    // }
    // return -1
    var pivot = 0;
    var sum_1 = 0,
        sum_2 = 0;
    for (var i = 1; i < nums.length; i++) {
        sum_2 += nums[i];
    }
    console.log(sum_2)
    while (sum_1 != sum_2 && pivot < nums.length) {
        sum_1 += nums[pivot];
        if (pivot + 1 < nums.length)
            sum_2 -= nums[pivot + 1];
        else
            sum_2 = 0;
        pivot++;
    }

    return pivot == nums.length ? -1 : pivot;
}




// console.log(FindPivotIndex([1, 7, 3, 6, 5, 6]))
// console.log(FindPivotIndex([1, 2, 3]))
console.log(FindPivotIndex([-1, -1, -1, -1, -1, 0]))
    // console.log(FindPivotIndex([1, 1, 1, 1, 1, 0]))
    // console.log(FindPivotIndex([-1, -1, -1, -1, 0, 1]))


// console.log(FindPivotIndex([]))