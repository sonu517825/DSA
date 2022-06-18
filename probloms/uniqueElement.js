// [0 , 2,2,2,3,4,5,5,6,7,8,9,9,9] return unique element array and count


function uniqueEle(arr) {
    if (arr.length === 0) {
        throw new Error('Array is empty')
    }

    let pointer1 = 0

    for (let j = 1; j < arr.length; j++) {
        if (arr[pointer1] !== arr[j]) {
            pointer1++
            arr[pointer1] = arr[j]
        }

    }

    let temp = []
    for (let i = 0; i <= pointer1; i++) {
        temp[i] = arr[i]
    }
    ++pointer1 // +1
    return { pointer1, temp }
}

function set(arr){
    let t = new Set(arr)
    return t
}


console.log(set([0, 2, 2, 7, 1,333,8, 9, 9, 9]))
let arr = [0, 2, 2, 7, 8, 9, 9, 9]

let result = uniqueEle(arr)
console.log(result)



