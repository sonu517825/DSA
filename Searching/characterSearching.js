// lenear search  =>  no need to sort   =>  O(n)
// binary search  =>  array must be sorted  =>  O(log n)



function binarySearchITR(arr, searchElement) {
    let rightPointer = 0
    let leftPointer = arr.length - 1
    while (rightPointer <= leftPointer) {
        let midOfArr = Math.floor((rightPointer + leftPointer) / 2)
        if (arr[midOfArr] === searchElement) return midOfArr
        else if (arr[midOfArr].charCodeAt(0) < searchElement.charCodeAt(0)) rightPointer = midOfArr + 1
        else if (arr[midOfArr].charCodeAt(0) > searchElement.charCodeAt(0)) leftPointer = midOfArr - 1
    }
    return -1
}



function binarySearchREC(arr, searchElement, rightPointer, leftPointer) {
    if (rightPointer <= leftPointer) {
        midOfArr = Math.floor((rightPointer + leftPointer) / 2)
        if (arr[midOfArr] === searchElement) return midOfArr
        else if (arr[midOfArr].charCodeAt(0) < searchElement.charCodeAt(0))
            return binarySearchREC(arr, searchElement, midOfArr + 1, leftPointer)
        else if (arr[midOfArr].charCodeAt(0) > searchElement.charCodeAt(0))
            return binarySearchREC(arr, searchElement, rightPointer, midOfArr - 1)
    }
    return -1
}


let charArr = ['A' , 'D' , 'X' , 'Z' , 'a' , 'g' , 'i' , 'u' , 'v' , 'z']
let searchElement = 'X'
let result1 = binarySearchITR(charArr, searchElement)
let result2 = binarySearchREC(charArr , searchElement , 0 , charArr.length-1)

result1 === -1 ? console.log('element not present') : console.log(searchElement, 'is present at index', result1)
result2 === -1 ? console.log('element not present') : console.log(searchElement, 'is present at index', result2)




// home work does not matter uppercase or lower case   =>  consider O == o

