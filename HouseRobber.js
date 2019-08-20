function HouseRobber(arr) {
    // let wayOne = 0;
    // let wayTwo = 0;

    // for (let i = 0; i < arr.length; i = i + 2) {
    //     if (arr[i]) {
    //         wayOne += arr[i]
    //     }
    //     if (arr[i + 1]) {
    //         wayTwo += arr[i + 1]
    //     }
    // }
    // return wayOne > wayTwo ? wayOne : wayTwo

    let visited = [];


    for (let i = 0; i < arr.length; i++) {
        console.log(Math.max.apply(Math, arr))
        visited.push(Math.max.apply(Math, arr))
        if (visited.indexOf()) {

        }
        visited.push(arr[arr.indexOf(Math.max.apply(Math, arr)) - 1])
        visited.push(arr[arr.indexOf(Math.max.apply(Math, arr))])
        visited.push(arr[arr.indexOf(Math.max.apply(Math, arr)) + 1])
            // i = i - 1
    }
    console.log(visited)
}
console.log(HouseRobber([2, 7, 9, 3, 1]))
    // 2, 7, 9, 3, 1

2, 7, 9, 3, 1