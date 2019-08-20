function lottaryWinnwrTicket(arr) {
    let dict = {}
    let j = 0
    let temp = 0;
    if (arr < 10) {
        return arr
    }
    for (let i = 1; i <= arr; i++) {
        j = digSum(i)
        if (!dict[j]) dict[j] = true
        else {
            dict[j] += 1
        }
    };

    for (let key in dict) {
        if (dict[key] > temp) {
            temp = dict[key]
        }
    }
    let count = 0;
    for (let key in dict) {
        if (temp == dict[key]) count++
    }
    return count - 1
};

// console.log(lottaryWinnwrTicket(1000))
console.log(lottaryWinnwrTicket(22))
console.log(lottaryWinnwrTicket(3))
console.log(lottaryWinnwrTicket(12))

function digSum(n) {
    if (n == 0)
        return 0;
    return (n % 9 == 0) ? 9 : (n % 9);
}