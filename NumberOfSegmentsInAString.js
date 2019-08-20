function NumberOfSegmentsInAString(str) {
    str = str.trim()
    if (!str) return 0;
    let array = str.split(' ').filter(function(str) {
        return /\S/.test(str);
    });
    return array.length

};
// console.log(NumberOfSegmentsInAString('Number of Segments in a String'));

// console.log(NumberOfSegmentsInAString('Hello, my name is John  '));
// console.log(NumberOfSegmentsInAString(''))
// console.log(NumberOfSegmentsInAString(', , , ,        a, eaefa'))
// console.log(NumberOfSegmentsInAString("foo    bar"))

// ", , , ,        a, eaefa"

// let a = '111'
// let result = '';
// for (let i = 0; i < a.length; i++) {
//     result += a.charAt(i).toString(2)
// }
// console.log(result)





// console.log(1 ^ 3)


function SumOfTwoIntegers(num1, num2) {
    if (!num1)
        return num2;
    else
        return SumOfTwoIntegers((num1 & num2) << 1, num1 ^ num2);
};

console.log(SumOfTwoIntegers(-12, -8));