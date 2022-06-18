function ball(arr, n) {


    let start = 1
    let end = n - 1
    let leftSum = arr[0]
    let rightSum = arr[n-1]
    console.log(leftSum, rightSum)
    while (start < end) {

        // leftSum += arr[start]
        // rightSum += arr[end]
        console.log(leftSum, rightSum , start , end)
        if (leftSum < rightSum) {
            leftSum += arr[start]
            start++
        }
        else if (leftSum > rightSum) {
            rightSum += arr[end]
            end--
        }
        else if (rightSum === leftSum) {

            // console.log(end , start)

            // if (end - start - 1 === 1) {
            //     console.log(start + 1)
            // }
return start
            break
        }
    }

}

let arr = [1, 2, 3, 3]
let n = arr.length

console.log(ball(arr, n))


