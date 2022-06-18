// insert first position 
// insert last position 
// insert required position


function insertFirst(arr, ele) {
    // arr.unshift(ele)  => direct
    let len = arr.length // here consider len +1
    for (let i = len; i > 0; i--) {
        arr[i] = arr[i - 1]
    }
    arr[0] = ele
    return arr
}


function insertLast(arr, ele) {

    //  arr.push(ele) 
    //  return arr// => direct
    let len = arr.length // consider en +1
    arr[len] = ele

    return arr
}




function insertPos(arr, ele , pos) {
   
    let len = arr.length // here consider len +1
    for (let i = len; i > pos; i--) {
        arr[i] = arr[i-1]
    }
    arr[pos] = ele
    return arr
}

let arr = [1,2, 3, 5, 6]
let ele = 4
let pos = 3
//let result1 = insertFirst(arr, ele)
//let result2 = insertLast(arr, ele)
let result3 = insertPos(arr , ele, pos)

//console.log(result1)
//console.log(result2)
console.log(result3)




