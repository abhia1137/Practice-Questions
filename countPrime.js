function countPrime(number) {
    let count = 0
    if (number == 2) {
        return 0
    };
    if (number == 3) {
        return 2
    }
    if (number == 4) {
        return 2
    }
    if (number > 3) {
        for (let i = 3; i < number; i++) {
            if (checkSinglePrime(i)) {
                count++
            }
        }
        return count;
    } else {
        return 0;
    }
};

function checkSinglePrime(number) {
    if (number < 10) {
        for (let i = 3; i < number; i++) {
            if (number % i == 0) {
                return false;
            };
        };
    } else {
        for (let i = 2; i < Math.sqrt(number); i++) {
            if (number % i == 0) {
                return false;
            };
        };
    };
    return true
};

console.log(countPrime(4))
console.log(countPrime(10))
console.log(countPrime(5))
console.log(countPrime(20))