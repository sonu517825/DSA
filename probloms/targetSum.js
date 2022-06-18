// return first pair of sum zero       
// array must be sorted


function zeroPair(arr, targetSum) {

    let leftPonter = 0
    let rightPointer = arr.length - 1

    while (leftPonter < rightPointer) {

        let checkTargetSum = arr[leftPonter] + arr[rightPointer]

        if (checkTargetSum === targetSum) {
            return [arr[leftPonter], arr[rightPointer]]
        }
        else if (checkTargetSum > targetSum) {
            rightPointer--
        }
        else {
            leftPonter++
        }

    }
    return []
}



let arr = [-45 , 2, 4, 7, 9, 11, 23, 45, 67, 89]
let targetSum = 0

let result = zeroPair(arr, targetSum)
console.log(result)