// [2,3,5,7,8,9,12,14,56,78,222,777,888,999,3333]
// 14


function binarySearch(arr, ele) {
    let min = 0
    let max = arr.length - 1
    while (min <= max) {
        let mid = Math.floor((min + max) / 2)  
        if (arr[mid] === ele) {
            return mid
        }
        else if (arr[mid] < ele) {
            min = mid + 1
        }
        else {
            max = mid - 1
        }
    }
    return 'not found'

}

let arr = [2, 3, 5, 7, 8, 9, 12, 13,14,56,78,222,777,888,999,3333]
let ele = 2
let result = binarySearch(arr, ele)
console.log(result)


