// function calculateFact(n) {

//     if (n == 1) return 1;
//     if (n == 2) return 2;
//     return calculateFact(n - 1) + calculateFact(n - 2)
// };


// console.log(calculateFact(6))


function basicDynamic(n) {
    if (n == 0) return
    basicDynamic(n - 1);
    console.log(n)
};

// basicDynamic(5)


function climbingStairs(n) {

    // DP[0] = DP[1] = 1, DP[2] = 2
    // for (let i = 3; i <= n; i++) {
    //     DP[i] = DP[i - 1] + DP[i - 2]
    // };
    // return DP[DP.length - 1]
    let DP = [];
    if (n == 1) {
        return 1
    }
    return (n - 1) + (n - 2) + 1

};

console.log(climbingStairs(5))
    // console.log(climbingStairs(1))

// function Rob(nums) {
//     let n = nums.length;
//     let ppVal = 0;
//     let pVal = 0;
//     let ans = 0;
//     for (let i = 0; i < n; i++) {
//         nums[i] = nums[i] + ppVal;
//         ans = Math.max(ans, nums[i]);
//         ppVal = pVal;
//         pVal = ans;
//     }
//     return ans;
// };

// console.log(Rob([2, 1, 1, 2]))

// 9012140064 nikhil GPD


// function nthfib(number) {
//     return Math.round(Math.pow((1 + Math.sqrt(5)) / 2, number) / Math.sqrt(5))
// }

// console.log(nthfib(9))


// function TwoSum(nums, target) {
//     var dict = {};
//     for (let i = 0; i < nums.length; i++) {
//         console.log(dict)
//         if (target - nums[i] in dict) {
//             return [dict[target - nums[i]], i]
//         } else {
//             dict[nums[i]] = i;
//         }
//     }
// };


// console.log(TwoSum([2, 7, 11, 15], 9))