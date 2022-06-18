// find first negative number of every subarray of 4 size  // O(n)
// if possible than store sub array with result also 
// [ [[1,3],0] , [[3,4],0] , [[5,-7],-7]]  etc.



// input
//let arr = [1, 3, 4, 5, -7,]// -2, 5, 8, -8, -9, 4, 1,] // 12-4+1 => 10
//let k = 2


// output
[
    [[1, 3], 0],
    [[3, 4], 0],
    [[4, 5], 0],
    [[5, -7], -7]
]



function abc(arr, k) {
    let start = 0
    let end = 0
    let result = []
    let list = []
    let temp = []
    while (end <= arr.length) {

        if (end - start + 1 <= k) {

            temp.push(arr[end])

            if (arr[end] < 0) {

                list.push(arr[end])
            }


            if (end - start + 1 === k) {

                if (list.length === 0) {
                    let t = [temp, 0]
                    result.push(t)
                    temp = []
                }
                else {
                    let t = [temp, list[0]]
                    result.push(t)
                    temp = []
                }
                list = []
                start++
                end = start
            } else end++

        }

    }
    result.pop()
    console.log(result)
}


let arr = [1, 3, 4, 5, -7,]// -2, 5, 8, -8, -9, 4, 1,] // 12-4+1 => 10
let k = 2
abc(arr, k)



