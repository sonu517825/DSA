// find max and min sum with his absalute difference of size k   => 0(n)
// short formula  =>  (  array size  -  window size  +  1  )  =>  all possible sub array  


// let arr = [2, 5, 1, 7,]//6, 9, 0, 5, 5, 5]
// let k = 2 // maxSum = 8 , minSum = 6 , absaluteDiff = 2
// let maxSum = 0
// let minSum = 1 / 0
// let flag = 0



// bruit force


// for (let i = 0; i < arr.length; i++) {
//     flag = 0
//     for (let j = i; j < i + k; j++)
//         if (i + k <= arr.length) flag += arr[j]
//     if (i + k <= arr.length) {
//         if (flag > maxSum) maxSum = flag
//         if (flag < minSum) minSum = flag
//     }
// }


function maxMinDiff(arr, k) {

    for (let i = 0; i < k; i++) flag += arr[i]  // k
    if (flag > maxSum) maxSum = flag
    if (flag < minSum) minSum = flag

    for (let i = k; i < arr.length; i++) { // n-k

        flag -= arr[i-k]
        flag += arr[i]
        if (flag > maxSum) maxSum = flag
        if (flag < minSum) minSum = flag

    }

    // console.log(flag)
    // console.log(`maxSum = ${maxSum} , minSum = ${minSum} , absaluteDiff = ${maxSum - minSum}`)
} // k+n-k => n


let arr = [2, 5, 1, 7,]//6, 9, 0, 5, 5, 5]
let k = 4 // maxSum = 8 , minSum = 6 , absaluteDiff = 2
let maxSum = 0
let minSum = 1 / 0
let flag = 0
maxMinDiff(arr, k)


console.log(`maxSum = ${maxSum} , minSum = ${minSum} , absaluteDiff = ${maxSum - minSum}`)


