// [-6,3,3,1,0,-5,33,8,-3,4,8,90]

let i = 0
let j = 1
let res = []

function sortCheck(arr) {
    if (isSort(arr)) {
    res = arr
        return 
    }
    else if (arr[i] <= arr[j]) {
        i++
        j++
        sortCheck(arr)
    }
    else {
        [arr[i], arr[j]] = [arr[j], arr[i]]
        i = 0
        j = 1
        sortCheck(arr)
    }
}


function isSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            return false
        }
    }
    return true
}



let arr = [-6, 3, 3, 1, 0, -5, 33, 8, -3, 4, 8, 90]

//let result = 
sortCheck(arr)
console.log(res)


