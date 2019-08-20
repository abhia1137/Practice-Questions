function CircularArrayRotation(arr, k, q) {
    while (k > 0) {
        arr.unshift(arr.pop());
        k--
    }

    let result = [];

    for (var i = 0, len = q.length; i < len; i++) {
        result.push(arr[q[i]])
    }
    return result;

};
console.log(CircularArrayRotation([3, 4, 5], 2, [1, 2]))