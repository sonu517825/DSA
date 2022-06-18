// delete first
// delete last 
// delete required position

function deleteFirst(arr) {

    // arr.shift()
    // return arr  // direct

    let len = arr.length - 1 // consider len-1 // 5
    for (let i = 0; i < len; i++) { // 4
        arr[i] = arr[i + 1]
    }

    let res = []
    for (let i = 0; i < len; i++) {
        res[i] = arr[i]
    }

    return res
}



function deleteLast(arr) {

    // arr.pop()
    // return arr  // direct

    let len = arr.length - 1 // consider len-1 // 5

    let res = []
    for (let i = 0; i < len; i++) {
        res[i] = arr[i]
    }

    return res
}



function deletePos(arr, pos) {


    let len = arr.length - 1 // consider len-1 // 5

    for (let i = pos; i < len; i++) {
        arr[i] = arr[i + 1]
    }
    let res = []
    for (let i = 0; i < len; i++) {
        res[i] = arr[i]
    }

    return res
}




var arr = [0, 1, 2, 3, 3, 4, 5]
var pos = 3
// let result1 = deleteFirst(arr)
// console.log(result1)

// let result2 = deleteLast(arr)
// console.log(result2)


let result3 = deletePos(arr, pos)
console.log(result3)