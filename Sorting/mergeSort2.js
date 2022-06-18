//Merge Sort Merge sort is a sorting algorithm that uses the “divide and conquer” concept.

//Given an array, we first divide it in the middle and we get 2 arrays.

//We recursively perform this operation, until we get to arrays of 1 element.

//Then we start building up the sorted array from scratch, by ordering the individual items we go






function merge(left, right) {

    let i = 0
    let j = 0
    let result = []

    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result.push(left[i])
            i++
        } else {
            result.push(right[j])
            j++
        }

    }

    while (i < left.length) {
        result.push(left[i])
        i++
    }

    while (j < right.length) {
        result.push(right[j])
        j++
    }
    return result
}



function mergerSort(arr) {

    if (arr.length <= 1) return arr
    let mid = Math.floor(arr.length / 2)
    let left = mergerSort(arr.slice(0, mid))
    let right = mergerSort(arr.slice(mid))
    return merge(left, right)

}

console.log(mergerSort([1, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, -7586870890,6798098909090,75765,0, 0, 2, 2, -1]))

// https://www.toptal.com/javascript#hiring-guide
// https://visualgo.net/en/sorting


