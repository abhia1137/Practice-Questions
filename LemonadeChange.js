function LemonadeChange(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    // console.log(sum);

    while (sum != arr.length * 5) {
        sum -= 5
        if (sum == arr.length * 5) {
            return true
        }
    }
    return false
};

console.log(LemonadeChange([5, 5, 5, 10, 20]))
console.log(LemonadeChange([10, 10]))