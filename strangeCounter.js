function strangeCounter(t) {

    // let cycleStart = 3
    // let newValue = 3
    // let allValues = []

    // for (let i = 1; i < Math.round(t * 2); i++) {

    //     if (newValue != 1) {
    //         // console.log(i, newValue)
    //         if (i == t) {


    //             allValues.push(newValue)

    //             t = 0


    //             break
    //         }
    //         newValue--    //         // console.log(i)
    //     } else {

    //         // console.log(i, newValue)
    //         cycleStart = cycleStart * 2
    //         newValue = cycleStart
    //     }
    // }


    // console.log(allValues[t])
    // return allValues[t]
    let rem = 3
    while (t > rem) {
        t = t - rem
        rem = rem * 2
    }
    // console.log(rem - t + 1)
    return rem - t + 1
}

strangeCounter(12)