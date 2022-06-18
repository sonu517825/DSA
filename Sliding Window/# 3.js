//  find all No. of all possible subarray whoose sum is 10 maintain sub array also

// possible combinations 

// subArray size should be betbeen 3 to 5
// Or max from 3 only
// or min from 5 only 
// no matter sub array size
// with all maintain subarray also



// size not matter
// let arr = [2, 5, 1, 7, 6, 9, 0, 5, 5, 5]
// let targetSum = 10
// let flag = 0
// let count = 0
// let result = []
// let temp = []


// for (let i = 0; i < arr.length; i++) { // n
//     //  flag = arr[i]
//     //   if(flag === targetSum) count++
//     flag = 0
//     temp = []
//     for (let j = i; j < arr.length; j++) { // n
//         flag += arr[j]
//         temp.push(arr[j])
//        // console.log(flag)
//         if (flag === targetSum && j-i+1 >=3 && j-i+1<=5) {
//             count++
// let arr = [2, 5, 1, 7, 6, 9, 0, 5, 5, 5]
// let targetSum = 10
// let flag = 0
// let count = 0
// let result = []
// let temp = []
//             break
//         }
//         if (flag > targetSum) break
//     }

//     if(flag === targetSum){
//          console.log(temp) 
//          result.push(temp)
//     }

// }

// console.log(count , result)




// optimie solution


function tt(arr, target) {
    let star = 0
    let end = 0
    let flag = 0
    while (end <= arr.length) {
        end = star + 1
        while (flag !== target) {
            flag += arr[end]
            console.log(flag)
            end++
        }
        end++
    }
}



let arr = [2, 5, 1, 7, 6, 9, 0, 5, 5, 5]
let targetSum = 10
let flag = 0
let count = 0
let result = []
let temp = []

console.log('ff')
//tt(arr, targetSum)


