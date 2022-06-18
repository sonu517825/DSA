// A[] = {1,2,3,7,5}
// Output: 2 4
// s = 12


const subArr = (arr , sum) => {
let tempSum = 0
let res = []
    for(let i=0;i<arr.length;i++){
tempSum+=arr[i]
res.push(arr[i])
if(tempSum === sum){
    return res
}
    }
}

const arr = [1,2,3,7,5]
const sum = 12
const result = subArr(arr , sum)
console.log(result)


