function heapSort(unSorted, value) {
    console.log(1)
    let swap = 0
    let newArray = []
    // for(let i=0; i<=unSorted.length; i++){
    //     if(unSorted[i]>0){
    //         debugger
    //         let D1 = Math.abs(unSorted[2*i+1] - unSorted[i])
    //         let D2 = Math.abs(unSorted[2*i+2] - unSorted[i])
    //         if(D1<D2){

    //             newArray.push(unSorted[2*i + 1])
    //             unSorted.splice(unSorted[i], 1)

    //         }else{



    //             newArray.push(unSorted[2*i + 2])


    //             unSorted.splice(unSorted[i], 1)


    //         }
    //     }
    //     console.log(unSorted)

    //     // heapSort([unSorted[i],unSorted[2*i+1],unSorted[unSorted.length - (unSorted.length - 1)]])   
    // }

    for (let i = 0; i < unSorted.length; i++) {
        if (value>unSorted[i] && value < unSorted[i+1]) {
            let temp = unSorted[i+1]
            unSorted[i+1] = value
            unSorted[i+2] = temp
        }

    }
    console.log(Math.max(unSorted))
console.log(unSorted)
}


heapSort([1, 3, 5], 4)