function answerQuery(findPalindrom) {

    console.log(findPalindrom.split('').join() === findPalindrom.split('').reverse().join());

    let check1 = []
    let checkTwo = []
    let splitString = findPalindrom.split('')
    // console.log(splitString)
    // console.log(splitString.length)


    for (let j = splitString.length; j >= 0; j--) {
        console.log(splitString[j])
    }

    for (let j = splitString.length; j >= 0; j--) {
        console.log(splitString[j])
    }
    // for (let i = 0; i < splitString.length; i++) {
    //     for (let j = splitString.length; j >= i; j--) {
    //         if(splitString[i] == splitString[j]){
    //             // console.log(splitString[j],splitString[i])
    //             check1.push(splitString[j])
    //             checkTwo.push(splitString[i])
    //         }
    //     }
    // }

    console.log(check1)
    console.log(checkTwo)
}


answerQuery('abba')
