var addStrings = function(num1, num2) {
    let carry = 0;
    let result = []
    num1 = num1.split('');
    num2 = num2.split('')
    let intOne = 0;
    let intTwo = 0;
    let rem = 0;
    let length = num2.length > num1.length ? num2.length : num1.length
    for (var i = 0; i < length; i++) {
        intOne = parseInt(num1[num1.length - 1 - i])
        intTwo = parseInt(num2[num2.length - 1 - i])
        if (intOne + intTwo + carry < 10) {

            if ((intOne && intTwo) >= 0) {
                if (carry == 1) {
                    result.push(intOne + intTwo + carry)
                } else {
                    result.push(intOne + intTwo)
                }
                carry = 0
            } else {
                if (intOne >= 0) {
                    // result.push(intOne)
                } else if (intTwo >= 0) {
                    result.push(intTwo)
                };
            };
            carry = 0
        } else {
            if (intOne && intTwo && (intOne && intTwo) >= 0) {
                rem = (intOne + intTwo + carry) % 10;
                carry = 1
                result.push(rem);
            } else if (intOne && intOne >= 0) {
                if (intOne + carry < 10) {
                    result.push(intOne + carry)

                    carry = 0
                } else {
                    rem = (intOne + carry) % 10
                    result.push(rem)
                    carry = 1
                }
            } else {

                if (intTwo && (intTwo + carry) < 10) {
                    result.push(intTwo + carry)
                    carry = 0
                } else if (intTwo) {
                    rem = (intTwo + carry) % 10
                    result.push(rem)
                    carry = 1
                } else {
                    result.push(carry)
                    carry = 0
                }
                // carry = 0
            }
        }
    };

    if (carry) {
        result.push(carry)
    }

    return result.reverse().join('').toString()
};
console.log(addStrings('190', '209'))
console.log(addStrings('408', '5'))
console.log(addStrings('484', '18'))
console.log(addStrings('9333852702227987', '85731737104263'))
console.log(addStrings('9', '1'))
console.log(addStrings('4', '69'))
console.log(addStrings('103', '98'))

// 61030
//"7030"
"9333852702227987"
"85731737104263"

"9419584439332250"
"9419584439332250"