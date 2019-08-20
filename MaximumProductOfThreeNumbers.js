function MaximumProductOfThreeNumbers(arr) {
    let newArray = {};
    let negativeCount = 0;
    let result = 1
    let checkNegative = 0;
    let count = 0
    let double = 0
    for (let i = 0; i < arr.length; i++) {
        if (!newArray[Math.abs(arr[i])]) {
            newArray[Math.abs(arr[i])] = arr[i];
        } else {
            newArray[Math.abs(arr[i])] *= arr[i];
        }

    }
    console.log(newArray)
    for (let i = 0; i < arr.length; i++) {
        checkNegative = topThree(newArray)
        if (newArray[checkNegative] < 0) {
            negativeCount++
        }
        result *= topThree(newArray)
        count++
        if (negativeCount % 2 == 1) {
            double = 2 * result
        } else {
            double = 0
        }
        if (count == 3) {
            break
        }
        delete newArray[key]
    };

    return result - double
}



function topThree(newArray) {
    let first = Object.keys(newArray)[0];
    for (key in newArray) {
        if (key > first) {
            first = key;
        }
    }
    return first
}
// console.log(MaximumProductOfThreeNumbers([1, 2, 3, 4]));
// console.log(MaximumProductOfThreeNumbers([-4, -3, -2, -1, 60]));
// console.log(MaximumProductOfThreeNumbers([-1, -2, -3]));
console.log(MaximumProductOfThreeNumbers([1000, 1000, 2, 1, 2, 5, 3, 1]));



// function aloneElement(nums) {
//     let lo = 0;
//     let hi = nums.length - 1;
//     while (lo < hi) {
//         let mid = (lo + hi) >>> 1;
//         let rightLen = hi - mid + 1;

//         // odd
//         if ((rightLen & 1) == 1) {
//             if (nums[mid] == nums[mid + 1]) {
//                 lo = mid + 2;
//             } else {
//                 hi = mid;
//             }
//         }
//         // even
//         else {
//             if (nums[mid] == nums[mid + 1]) {
//                 hi = mid - 1;
//             } else {
//                 lo = mid + 1;
//             }
//         }
//     }
//     return nums[lo];
// };

// console.log(aloneElement([2, 2, 1, 1, 9, 9, 5, 2, 2]))
// console.log(aloneElement([2, 2, 1, 2, 2]))
// console.log(aloneElement([1, 1, 2]))
// console.log(aloneElement([3, 3, 2, 3, 3]))
// console.log(aloneElement([2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2]))


// function SquaresOfASortedArray(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         arr[i] = arr[i] * arr[i]
//     }
//     return arr.sort((a, b) => { return a - b })
// };

// console.log(SquaresOfASortedArray([-4, -1, 0, 3, 10]))
// console.log(SquaresOfASortedArray([-7, -3, 2, 3, 11]))