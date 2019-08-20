function DivideTwoIntegers(dividend, divisor) {
    let length = divisor;
    let temp = 0;
    if (dividend == -2147483648) {
        return 2147483647
    }
    console.log(true ^ true)
    let sign = ((dividend < 0) ^ (divisor < 0)) ? -1 : 1;
    let quotient = 0
    dividend = Math.abs(dividend);
    divisor = Math.abs(divisor);
    length = divisor
    temp = Math.abs(dividend);
    while (divisor <= temp) {
        ++quotient
        temp -= divisor
    }
    return sign * quotient
};
console.log(DivideTwoIntegers(-2147483648, -1))


// Given two integers dividend and divisor, 
// divide two integers without using multiplication, division and mod operator.