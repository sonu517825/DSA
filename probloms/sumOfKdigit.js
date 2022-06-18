// [1,2,5,3,7,8,3,5,0,78,4,5,33,56]
// max sum
// k =4


function maxSum(arr, k) {
    if (k > arr.length) throw new Error('max size exceed')
    let sum = 0
    for (let i = 0; i < arr.length - k + 1; i++) {
        let temp = 0
        for (let j = 0; j < k; j++) {  // can start with i
            temp += arr[j + i]
        }
        if (temp > sum) {
            sum = temp
        }
    }
    return sum
}

let arr = [1, 2, 5, 3, 7, 8, 3, 5, 0, 78, 4, 5, 33, 56]
let k = 3
let result = maxSum(arr, k)
console.log(result)



function window(arr, k) {
    if (k > arr.length) throw new Error('max size exceed')
    let maxSum = 0
    for (let i = 0; i < k; i++) {
        maxSum += arr[i]    }

    let tempSum = maxSum
    for (let i = k; i < arr.length; i++) {

        // tempSum = tempSum - arr[i-k] + arr[i]
        // maxSum = Math.max(tempSum , maxSum)


        tempSum += arr[i]
        tempSum -= arr[i-k]
        if(tempSum>maxSum){ 
            maxSum = tempSum
        }

    }
    return maxSum
}



let result2 = window(arr, k)
console.log(result2)
