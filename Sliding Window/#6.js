// find max positive min positive in length k subarray
// arr = [-12, -56, -344, 45, 5, 6, -7, 5, 4, 3, -789, 53, -54, 3, 2, -34, 6, 8 - 8]
// k = 4

// output format

/*

[
    [[-12, -56, -344, 45], [45, 45]],
    [[-56, -344, 45, 5], [45, 5]],
    [[-344, 45, 5, 6], [45, 5]],
    [[45, 5, 6, -7], [45, 5]],
    [[5, 6, -7, 5], [6, 5]],
    [[6, -7, 5, 4], [6, 4]],
    [[-7, 5, 4, 3], [5, 3]],
    [[5, 4, 3, -789], [5, 3]],
    [[4, 3, -789, 53], [53, 3]],
    [[3, -789, 53, -54], [53, 3]],
    [[-789, 53, -54, 3], [53, 3]],
    [[53, -54, 3, 2], [53, 2]],
    [[-54, 3, 2, -34], [3, 2]]
]

*/






function maxPos(arr, k) {

    let startWindowPointer = 0
    let endWindowPointer = 0
    let result = []
    let deque = []
    let posMax = 0
    let posMin = 1 / 0

    while (endWindowPointer <= arr.length - k + 1) { // (n-k+1) ^ 2

        if (endWindowPointer - startWindowPointer + 1 <= k) {

            deque.push(arr[endWindowPointer])
            if (arr[endWindowPointer] >= 0 && posMax < arr[endWindowPointer]) posMax = arr[endWindowPointer]
            if (arr[endWindowPointer] >= 0 && posMin > arr[endWindowPointer]) posMin = arr[endWindowPointer]
            //    console.log(deque, posMax, posMin)

            if (endWindowPointer - startWindowPointer + 1 === k) {

                let temp1 = [posMax, posMin]
                let temp2 = [deque, temp1]
                result.push(temp2)
                deque = []
                posMax = 0
                posMin = 1 / 0
                startWindowPointer++
                endWindowPointer = startWindowPointer
            }
            else endWindowPointer++
        }
    }
    console.log(result)
}

let arr = [-12, -56, -344, 45, 5, 6, -7, 5, 4, 3, -789, 53, -54, 3, 2, -34, 6, 8 - 8]
let k = 4

// output format

/*

[
    [[-12, -56, -344, 45], [45, 45]],
    [[-56, -344, 45, 5], [45, 5]],
    [[-344, 45, 5, 6], [45, 5]],
    [[45, 5, 6, -7], [45, 5]],
    [[5, 6, -7, 5], [6, 5]],
    [[6, -7, 5, 4], [6, 4]],
    [[-7, 5, 4, 3], [5, 3]],
    [[5, 4, 3, -789], [5, 3]],
    [[4, 3, -789, 53], [53, 3]],
    [[3, -789, 53, -54], [53, 3]],
    [[-789, 53, -54, 3], [53, 3]],
    [[53, -54, 3, 2], [53, 2]],
    [[-54, 3, 2, -34], [3, 2]]
]

*/




//maxPos(arr, k)



function reve(str){
    let p1 = 0
    let p2 = str.length-1

    while(p1<p2){
        let t = str[p1]
        str[p1] = str[p2]
        str[p2] = t
        p1++
        p2--
    }
return str
}


console.log(reve('sonu'))

