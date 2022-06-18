function mergeSort(arr) {

    divideArr(arr, 0, arr.length - 1)


    function divideArr(arr, startIndex, endIndex) {
        if (startIndex >= endIndex) return
        let midIndex = startIndex + parseInt((endIndex - startIndex) / 2)
        divideArr(arr, startIndex, midIndex) 
        divideArr(arr, midIndex + 1, endIndex)
        conquerArr(arr, startIndex, midIndex, endIndex)
    }


    function conquerArr(arr, startIndex, midIndex, endIndex) {
        
        let temp = []
        let idx1 = startIndex
        let idx2 = midIndex + 1
        let x = 0

        while (idx1 <= midIndex && idx2 <= endIndex) {
            if (arr[idx1] <= arr[idx2]) {
                temp[x] = arr[idx1]
                x++
                idx1++
            }
            else {
                temp[x] = arr[idx2]
                x++
                idx2++
            }
        }

        while (idx1 <= midIndex) {
            temp[x] = arr[idx1]
            x++
            idx1++
        }

        while (idx2 <= endIndex) {
            temp[x] = arr[idx2]
            x++
            idx2++
        }

        for (let i = 0, j = startIndex; i < temp.length; i++, j++) {
            arr[j] = temp[i]
        }

    }

    return arr
}




let arr = [12, 99, 11, 88, 13, 5, 6, 0, 7, 0, 2, 5, 346, 2, 5455, 76, 76, 23]
let result = mergeSort(arr)
console.log(result)


