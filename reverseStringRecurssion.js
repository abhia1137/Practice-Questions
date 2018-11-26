let myArray = []
function reverseStringRecurssion(str) {
    let string = str.split('')
    if (string.length <= 0) {
        console.log(myArray.join(''))
    } else {
        let temp = string[string.length - 1]
        myArray.push(temp);
        string.pop()
        str = string.join('')

        reverseStringRecurssion(str, 0)
    }


}

reverseStringRecurssion('1002');