function NRepeatedElementInSize2NArray(arr) {
    let n = Math.floor(arr.length / 2)
    let count = {};
    for (let i = 0; i < arr.length; i++) {
        if (!count[arr[i]]) {
            count[arr[i]] = 1
        } else {
            count[arr[i]] += 1
        }

        if (count[arr[i]] == n) {
            return arr[i]
        }
    };
};
console.log(NRepeatedElementInSize2NArray([1, 2, 3, 3]))
console.log(NRepeatedElementInSize2NArray([2, 1, 2, 5, 3, 2]))
console.log(NRepeatedElementInSize2NArray([5, 1, 5, 2, 5, 3, 5, 4]))