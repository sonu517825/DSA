const uniqueElement = (arr) => {
    if (arr.length === 0) {
        throw new Error('Array is empty')
    }


    let uniqueEle = new Set(arr)
    return uniqueEle


}


let arr = [2, 4, 1, 2, 6, 3, 4, 6, 1, 2]
const result = uniqueElement(arr)
console.log(result)


