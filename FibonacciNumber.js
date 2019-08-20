function FibonacciNumber(n) {
    return parseInt(Math.floor(Math.pow(((1 + Math.sqrt(5)) / 2), n)) / Math.sqrt(5)) + 1
};


console.log(FibonacciNumber(9))