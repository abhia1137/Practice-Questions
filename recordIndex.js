function recordIndex() {
    let arr1 = [50, 40, 70, 60, 90]
    let arrayOfIndex = [3, 0, 4, 1, 2]
    let arr2 = []
    let arrayOfIndex2 = []
   
    for (let i = 0; i < arr1.length; i++) {
        arr2[arrayOfIndex[i]] = arr1[i]
        arrayOfIndex2.push(i)
    };
    
    console.log(arr2, arrayOfIndex2)
};
recordIndex()