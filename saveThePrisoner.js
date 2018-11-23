saveThePrisoner(352926151, 380324688, 94730870)
function saveThePrisoner(prisoners, treats, startFrom) {
    let j = startFrom-1;
    let n=j;
    //console.log(j);

    while (treats > 0) {


        if (j == prisoners)
            j = 0;

        while (j < prisoners) {
            j++;
            n++;
            treats--;
            if (treats <= 0)
                break;
        }
    }
    console.log(j);
    // return j - 1
    // let newData
    // let reminder
    // if (treats > prisoners) {
    //     newData = treats % prisoners + (startFrom - 1)
    //     if (newData > prisoners) {
    //         // console.log((newData - prisoners))
    //         return newData - prisoners
    //     } else {
    //         // console.log(newData)
    //         return newData
    //     }

    // } else if (treats < prisoners) {

    //     let newvalue = startFrom + treats - 1

    //     if (newvalue > prisoners) {

    // console.log(newvalue - prisoners)
    // return newvalue - prisoners

    // }
    // else {

    //         return newvalue
    //         // console.log(newvalue)
    //     }


    // } else {

    //     if (startFrom == 1) {
    //         // console.log(treats)
    //         return treats
    //     }else{
    //         return startFrom - 1
    //         // console.log(startFrom - 1)
    //     }
    // }

    // let lastCandy

    // if (treats > prisoners) {

    //     let candyLeft = treats - (prisoners - (startFrom - 1))
    //     for (let i = 0; i < Math.floor(treats / prisoners); i++) {
    //         lastCandy = candyLeft - prisoners

    //     }
    //     if (lastCandy < 1) {
    //         candyLeft = lastCandy
    //         console.log(lastCandy + prisoners)
    //             return lastCandy + prisoners
    //     } else {
    //         console.log(lastCandy)
    //         return lastCandy
    //     }


    // } else {


    //     let candyLeft = treats - (prisoners - (startFrom - 1))

    //     if (candyLeft < 0) {
    //         console.log(candyLeft + prisoners)
    //         return candyLeft + prisoners

    //     } else {
    //         console.log(candyLeft)
    //         return candyLeft
    //     }
    // }

}

// saveThePrisoner(111807455, 690309882, 23190325)


//110226121