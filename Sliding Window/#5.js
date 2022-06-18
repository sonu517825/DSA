//given a array find max negative and min negative of subarray array of length k  
// arr = [1, 2, -0.3, 5, -6, -7, 8, 3, -588, 7, -98, 5] 
// k = 2
// solution => between (n) and O(n^2)


// output

/*

[
    [ [ 1, 2 ], 0 ],      
    [ [ 2, -0.3 ], -0.3 ],
    [ [ -0.3, 5 ], -0.3 ],
    [ [ 5, -6 ], -6 ],    
    [ [ -6, -7 ], -6 ],   
    [ [ -7, 8 ], -7 ],    
    [ [ 8, 3 ], 0 ],
    [ [ 3, -588 ], -588 ],
    [ [ -588, 7 ], -588 ],
    [ [ 7, -98 ], -98 ],
    [ [ -98, 5 ], -98 ]
  ] [
    [ [ 1, 2 ], 0 ],
    [ [ 2, -0.3 ], -0.3 ],
    [ [ -0.3, 5 ], -0.3 ],
    [ [ 5, -6 ], -6 ],
    [ [ -6, -7 ], -7 ],
    [ [ -7, 8 ], -7 ],
    [ [ 8, 3 ], 0 ],
    [ [ 3, -588 ], -588 ],
    [ [ -588, 7 ], -588 ],
    [ [ 7, -98 ], -98 ],
    [ [ -98, 5 ], -98 ]
  ]

*/







// find max positive min positive ,
// find max min 

// of every subarray of size k


// max negative min negative
function abc(arr, k) {   //   [1,2,-1,5,-6,-77,8,3,-5,7,-88,5]

    let maxNeg = -1 / 0
    let minNeg = 0
    let start = 0
    let end = 0
    let minRes = []
    let maxRes = []
    let temp = []


    while (end <= arr.length) {

        if (end - start + 1 <= k) {

            temp.push(arr[end])
            if (arr[end] < 0 && arr[end] > maxNeg) maxNeg = arr[end]
            if (arr[end] < 0 && arr[end] < minNeg) minNeg = arr[end]


            if (end - start + 1 === k) {

                if (maxNeg === -1 / 0) {
                    let t = [temp, 0]
                    maxRes.push(t)
                }
                else {
                    let t = [temp, maxNeg]
                    maxRes.push(t)
                }
                let t = [temp, minNeg]
                minRes.push(t)
                minNeg = 0
                maxNeg = -1 / 0
                temp = []
                start++
                end = start
            } else end++

        }
    }
    minRes.pop()
    maxRes.pop()
    console.log(maxRes, minRes)

}


// 4-2+1 => 3
let arr = [1, 2, -0.3, 5, -6, -7, 8, 3, -588, 7, -98, 5] // 12 -6 +1 => 7
let k = 2
abc(arr, k)


/*

[
    [ [ 1, 2 ], 0 ],      
    [ [ 2, -0.3 ], -0.3 ],
    [ [ -0.3, 5 ], -0.3 ],
    [ [ 5, -6 ], -6 ],    
    [ [ -6, -7 ], -6 ],   
    [ [ -7, 8 ], -7 ],    
    [ [ 8, 3 ], 0 ],
    [ [ 3, -588 ], -588 ],
    [ [ -588, 7 ], -588 ],
    [ [ 7, -98 ], -98 ],
    [ [ -98, 5 ], -98 ]
  ] [
    [ [ 1, 2 ], 0 ],
    [ [ 2, -0.3 ], -0.3 ],
    [ [ -0.3, 5 ], -0.3 ],
    [ [ 5, -6 ], -6 ],
    [ [ -6, -7 ], -7 ],
    [ [ -7, 8 ], -7 ],
    [ [ 8, 3 ], 0 ],
    [ [ 3, -588 ], -588 ],
    [ [ -588, 7 ], -588 ],
    [ [ 7, -98 ], -98 ],
    [ [ -98, 5 ], -98 ]
  ]

*/



