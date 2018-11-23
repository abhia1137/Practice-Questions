// function compareTriplets(a, b) {    
//     let aSum =0
//     let bSum = 0
//     let lastArray = []
//     for(var i=0; i<a.length; i++){
//         if(a[i]> b[i]){
//         aSum++
//         }else if(a[i]<b[i]){
//         bSum++
//     }else{
//         aSum += 0
//         bSum += 0 
//     }
// }
//     lastArray.push(aSum, bSum)
// }


// compareTriplets([1,1,1], [1,1,3])


// Problem 2



// var arr = [1000000001, 1000000002, 1000000003, 1000000004, 1000000005]
// let sum = 0
// for (var i = 0; i < arr.length; i++) {
//     sum += arr[i]
// }


//     console.log(sum)



// 3 problem

// let matrix = []
// H = 4, // 4 rows
//     W = 6; // of 6 cells

// for (let y = 0; y < H; y++) {
//     matrix[y] = [1]
//     // for (x = 0; x < W; x++) {
//     //     matrix[y][x] = 1
//     // }
// }

// console.log(matrix.join('\n'))

// var array = [[1, 2, 3], [4, 5, 6], [7, 8, 11]]
// var a1 = [1, 2, 3]

// // console.log(array.join('\n'))


// let sum1 = 0
// let sum2 = 0

// // console.log(array.length)


// console.log(array[0][array.length - 1 - 0])
// for (let j = 0; j < array.length; j++) {
//     sum1 += array[j][j]
//     sum2 += array[j][array.length - 1 - j]
// }



// console.log('sum1', sum1)
// console.log('sum2', sum2)

// 4)

// var arr = [-4, 3, -9, 0, 4, 1]


// function plusMinus(arr) {
//     let plus = 0
//     let minius = 0
//     let zero = 0
//     let array = []
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > 0) {
//             plus++
//         } else if (arr[i]<0) {
//             minius++
//         }else{
//             zero++
//         }


//     }

//     print (array)
// }


// plusMinus([-4, 3, -9, 0, 4, 1])



// function staircase(n) {
//     var i
//     var  j

//  for(i=1; i<=n; i++)
//     {
//         /* Print spaces in decreasing order of row */
//         for(j=i; j<n; j++)
//         {
//             console.log(" ");
//         }

//         /* Print star in increasing order or row */
//         for(j=1; j<=i; j++)
//         {
//             console.log("*");
//         }

//         /* Move to next line */
//         console.log("\n");
//     }

// }
// staircase(5)




//5) 

// var arr = [7, 69, 2, 221, 8974]
// var sum1 = 0
// var sum2 = 0
// var newArr = arr.sort(function (a, b) { return a - b })

// for (var i = 0; i < newArr.length - 1; i++) {
//     sum1 += newArr[i]
// }

// for (var i = newArr.length - 1; i > 0; i--) {
//     sum2 += newArr[i]
// }

// console.log(sum1+ ' ' + sum2)


//Q5) 

// function birthdayCakeCandles(ar) {
//     let newArr = ar.sort(function (a, b) { return b - a })
//     var count = 0 
//     for (let i = 0; i < newArr.length; i++) {
//         if (newArr[0] == newArr[i]) {
//             count++
//         }
//     }
//     console.log(count)
// }

// birthdayCakeCandles([18, 90 ,90, 13, 90, 75, 90, 8, 90, 43])


// Q6)

// function TimeConverter(time) {
//     let pm = time.match('PM') ? true : false
//     // console.log(pm)|

//     time = time.split(':')

//     var min = time[1]
//     // console.log(min)

//     if (pm && time[0] != 12) {
//         var hour = 12 + parseInt(time[0], 10)
//         var sec = time[2].replace('PM', '')
//     } else if (!pm && time[0] == 12) {
//         var hour = '00'
//         var sec = time[2].replace('AM', '')
//     } else if (!pm && time[0] != 12) {
//         var hour = time[0]
//         var sec = time[2].replace('AM', '')
//     } else if (pm && time[0] == 12) {
//         var hour = time[0]
//         var sec = time[2].replace('PM', '')
//     }
//     console.log(hour + ':' + min + ":" + sec)
// }

// TimeConverter('12:40:22AM')




// Q7) icecreamParlor 

// function icecreamParlor(m, arr) {
//     let one = 0
//     let two = 0
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i; j < arr.length; j++) {
//             if (arr[i] + arr[j + 1] == m) {
//                 one = i + 1
//                 two = j + 2
//                 arr = []
//                 break
//             }
//         }
//     }

//     return one + ' ' +two
// }


// icecreamParlor(4, [1, 4, 5, 3, 2])


// Q8) 
// function gradingStudents(grades) {
//     let round = []
//     var endArray = []
//     for (let i = 0; i < grades.length; i++) {
//         round.push(Math.trunc(grades[i] / 5) + 1)
//     }
//     for (let j = 0; j < round.length; j++) {
//         if ((round[j] * 5) - grades[j] < 3 && grades[j] >= 38) {
//             endArray.push(round[j] * 5)
//         } else if ((round[j] * 5) - grades[j] >= 3 && grades[j] >= 38) {
//             endArray.push(grades[j])
//         } else if (grades[j] < 38) {
//             endArray.push(grades[j])
//         }
//     }
//     console.log(endArray)
// }
// gradingStudents([73, 67, 38, 33])

// Q9)countApplesAndOranges

// countApplesAndOranges(550, 650, 500, 700, [51, 200, 151], [-150, 200, 900])

// function countApplesAndOranges(s, t, a, b, apples, oranges) {
//     let newApples = []
//     let appleCount = 0
//     let orangeCount = 0
//     let newOrangs = []

//     for (let i = 0; i < apples.length; i++) {
//         newApples.push(apples[i] + a)
//     }
//     for (let i = 0; i < oranges.length; i++) {
//         newOrangs.push(oranges[i] + b)
//     }    
//     for (let i = 0; i < newApples.length; i++) {
//         if (newApples[i] >= s && newApples[i] <= t) {
//             appleCount++
//         }
//     }
//     for (let i = 0; i < newOrangs.length; i++) {
//         if (newOrangs[i] >= s && newOrangs[i] <= t) {
//             orangeCount++
//         }
//     }
//     console.log(appleCount +"\n" + orangeCount)

// }

// Q10)


kangaroo(0, 2, 5, 3)
function kangaroo(x1, v1, x2, v2) {
    let k1Location = x1
    let k1JumpsCount = 0
    let k2JumbCount = 0
    let k2location = x2
    var type
    let k1Data = []
    let k2Data = []
    var k1DataObject = {
        "jump": v1,
        "location": x1
    }
    var k2DataObject = {
        "jump": v2,
        "location": x2
    }
    for (let i = 0; i < 4000; i++) {
        k1Location = k1Location + v1
        k2JumbCount++
        k2location = k2location + v2
        k1JumpsCount++
        k1DataObject = {
            "jump": k1JumpsCount,
            "location": k1Location
        }

        k2DataObject = {
            "jump": k2JumbCount,
            "location": k2location
        }
        k1Data.push(k1DataObject)
        k2Data.push(k2DataObject)
    }

    for (let i = 0; i < k1Data.length; i++) {
        for (let j = i; j < k2Data.length; j++) {
            if (k1Data[i]['jump'] == k2Data[j]['jump'] && k1Data[i]['location'] === k2Data[j]['location']) {

                console.log('Jump of k1 = ' + k1Data[i]['jump'] + " and location is :  " + k1Data[i]['location'])
                console.log('Jump of k2 = ' + k2Data[j]['jump'] + " and location is :  " + k2Data[j]['location'])
                type = 'YES'
                break
            }
        }
    }

    if (type) {
        return 'YES'
        console.log('yes')
    } else {
        return 'NO'
        console.log('no')
    }

    // var firstValueOfK1 = x1 + v1
    // var firstValueOfK2 = x2 + v2
    // var differenceOfJUmp = firstValueOfK1 - firstValueOfK2

    // var jumpdifference = v1 - v2
    // if (differenceOfJUmp % jumpdifference == 0) {
    //     var output = (differenceOfJUmp / jumpdifference) + 1
    //     if(output){
    //         return 'YES'
    //     }
    // } else {
    //         return 'NO'
    // }
}


// Q11
function breakingRecords(s) {
    let highest, lowest;
    highest = lowest = s[0];
    
    let result = []
    
    for (let s_i = 1; s_i < s.length; s_i++)
    {
        if (s[s_i] > highest)
        {
            highest = s[s_i];
            ++result[0];
        }
        else if (s[s_i] < lowest)
        {
            lowest = s[s_i];
            ++result[1];
        }
    }
    
    console.log(result)
//   let  maxScoreCount = 0
//    let minScoreCount = 0
//     let maxScore = scores[0];
//     let minScore = scores[0];
//     let result = []
//     for (let i = 1; i < scores.length; i++) {
//         if (maxScore > scores[i]) {
//             if (scores[i] > minScore) {
//                 minScore = minScore
//             } else {
//                 minScore = scores[i]
//                 minScoreCount++
//             }
//         } else if (maxScore < scores[i]) {

//                 maxScore = scores[i]
//                 maxScoreCount++
//         }
//     }
//     result  =  maxScoreCount+" " + minScoreCount
//     return result
}

breakingRecords([10, 5, 20, 20, 4 ,5, 2, 25, 1])


// Q12
// birthday([1, 2, 1, 3, 2], 3, 2)
// function birthday(s, d, m) {
//     let i = 0, j = 0;
//     let sum = 0;
//     let counts = 0;
//     for (; j < s.length; j++) {
//         sum += s[j];

//         if (sum > d) {
//             sum -= s[i];
//             i++;
//         } else if (j - i == m - 1) {
//             if (sum == d) counts++;
//             sum -= s[i];
//             i++;
//         }
//     }

//     console.log(counts)

// }


// Q13)

// divisibleSumPairs(1, 4, [4])

// function divisibleSumPairs(n, k, arr) {
//     let pairCount = 0
//     let pairs = []
//     for (let i = 0; i < n; i++) {

//         for (let j = 1; j < n; j++) {
//             if ((arr[i] + arr[j]) % k == 0) {
//                 pairs.push(arr[i] + "" + arr[j])
//             }
//         }
//     };

//     for (let i = 0; i < pairs.length; i++) {
//         for (let j = 1; j < pairs.length; j++) {
//             if (pairs[i] == pairs[j].split("").reverse().join("")) {
//                 pairs.splice(pairs[j])
//             }
//         }

//     }

//     let endGame = []
//     for (let i = 0; i <= pairs.length; i++) {
//         for (let j = 1; j < pairs.length; j++) {
//             if (pairs[i] === pairs[j].split('').reverse().join('')) {
//                 pairs.splice(j, 1)
//             }
//         }

//         endGame.push(pairs[i])
//     }
//     endGame.splice(endGame.lastIndexOf(),1)
//     console.log(endGame.length)
// }


function sockMerchant(n, arr) {
    let sockCount = 0;
    let previousI;
    // for (let i = 0; i < arr.length; i++) {
    //     for (let j = i + 1; j < arr.length; j++) {
    //         if (arr[i] == arr[j]) {
    //             sockCount++
    //         }
    //     }
    // }

    //     let try1 = (n-1)/2

    // console.log(sockCount / try1)

    // var unique = [... new Set(arr)]
    // console.log(unique)
}


// sockMerchant(7, [4, 2, 4, 5, 2, 3, 4, 4, 4])

// sockMerchant(7, [1, 2, 1, 2, 1, 3, 2, 1])
// sockMerchant(7, [1, 1, 3, 1, 2, 1, 3, 3, 3, 3])




// var arr = [9, 9, 111, 2, 3, 4, 4, 5, 7, 5];




// let notFound = 0

// function socks(arr) {
//     let found = 0
//     var arr = arr.sort(function (a, b) { return a -b });
//     for (let i = 0; i < arr.length -1; i++) {
//         if (arr[i] === arr[i+1]) {
//             found++
//             i++
//         }

//     }
//     console.log(found)
// }


// socks([1,30,2,10,8,2,19,8,4,2,1])



// function catAndMouse(cat1, cat2, mouse) {
//     let cat1tomouse = mouse - cat1
//     let cat2tomose = mouse - cat2

//     if (Math.abs(cat2tomose) > Math.abs(cat1tomouse)) {
//         console.log('Cat A')
//     } else if (Math.abs(cat2tomose) < Math.abs(cat1tomouse)) {
//         console.log('Cat B')
//     } else {
//         console.log('Mouse C')
//     }
// }

// catAndMouse(1, 2, 3)


// function pageCount(n, k) {

//     // Considering back of last page. 
//     if (n % 2 == 0)
//         n++;

//     // Calculating Distance from front and 
//     // back of the book. 
//     if (k % 2 == 0)
//         return min((k - 0) / 2, (n - 1 - k) / 2);

//     return Math.floor((k - 1) / 2, (n - k) / 2);
//     //  // Brie start turning from page 1
//     //  let min = p / 2;
//     //  // Brie start turning from page n
//     //  let n_start = (n / 2) - (p / 2);
//     //  if (n_start < min) {
//     //      min = n_start;
//     //  }
//     //  // console.log(Math.round(min))
//     // if (n % 2 == 0) {
//     //      if (p % 2 == 1) {
//     //          console.log(Math.round(min))
//     //         //  return Math.floor(min)
//     //      }else{
//     //          if(p % 2 == 0){

//     //             //  return Math.round(min)
//     //              console.log(Math.round(min))
//     //          }

//     //      }
//     //  }else{
//     //       if(n % 2 == 1){
//     //         if(p %  2 == 0){
//     //             // console.log(Math.floor(min))
//     //             return Math.floor(min)
//     //         }else{
//     //             if(p % 2 == 1){
//     //                 return Math.round(min)
//     //                 // console.log(Math.round(min))
//     //             }else{
//     //                 return Math.round(min)
//     //                 // console.log(Math.round(min))
//     //             }

//     //         }
//     //       }
//     //  }
//}pageCount(6, 5)


// function getMoneySpent(keyboards, drives, b) {
//     let key = keyboards.sort((a, b) => { return b - a })
//     let driv = drives.sort((a, b) => { return b - a })
//     let arr1 = []
//     let arr2 = []
//     let end
//     let temp = 0
//     for (let i = 0; i < key.length; i++) {
//         for (let j = 0; j < driv.length; j++) {
//             if ((key[i] + driv[j] - b >= 0)) {
//                 // console.log(key[i], driv[j])
//                 min = (key[i] + driv[j]) - b
//                 if (min - temp > 0)
//                     arr1.push(key[i])
//                 arr2.push(driv[j])


//             } else {
//                 end = -1

//             }
//         }
//         temp = min
//     }
//     if (arr1[0] && arr2[0]) {
//         console.log(arr1[0], arr2[0])
//     } else {
//         console.log(end)
//     }
// }

// getMoneySpent([10, 40, 15], [42, 10, 38], 55)















