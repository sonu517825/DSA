// lenear search  =>  no need to sort   =>  O(n)
// binary search  =>  array must be sorted  =>  O(log n)



function binarySearchITR(arr, searchElement) {
    let rightPointer = 0
    let leftPointer = arr.length - 1
    while (rightPointer <= leftPointer) {
        let midOfArr = Math.floor((rightPointer + leftPointer) / 2)
        if (arr[midOfArr] === searchElement) return midOfArr
        else if (arr[midOfArr] < searchElement) rightPointer = midOfArr + 1
        else if (arr[midOfArr] > searchElement) leftPointer = midOfArr - 1
    }
    return -1
}



function binarySearchREC(arr, searchElement, rightPointer, leftPointer) {
    if (rightPointer <= leftPointer) {
        midOfArr = Math.floor((rightPointer + leftPointer) / 2)
        if (arr[midOfArr] === searchElement) return midOfArr
        else if (arr[midOfArr] < searchElement)
            return binarySearchREC(arr, searchElement, midOfArr + 1, leftPointer)
        else if (arr[midOfArr] > searchElement)
            return binarySearchREC(arr, searchElement, rightPointer, midOfArr - 1)
    }
    return -1
}


let arr = [10, 20, 30, 50, 53, 60, 80, 110, 130, 140, 170]
let searchElement = 53
let result1 = binarySearchITR(arr, searchElement)
let result2 = binarySearchREC(arr , searchElement , 0 , arr.length-1)

result1 === -1 ? console.log('element not present') : console.log(searchElement, 'is present at index', result1)
result2 === -1 ? console.log('element not present') : console.log(searchElement, 'is present at index', result2)




