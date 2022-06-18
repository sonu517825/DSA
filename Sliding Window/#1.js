//      find all posible sub array of size k  => O(n-k)
// short formula  =>  (  array size  -  window size  +  1  )    


let arr = [2, 5, 1, 7, 6, 9, 0, 5, 5, 5] // n-w+1 => 5 ,
let k = 4
let count = 0


function subArray(arr, k) {

    if (k > arr.length) return 'not formed subarray'

    for (let i = k; i <= arr.length; i++) {  // O(n-k)
        count++
    }
    return count

} // O(n-k)



console.log(subArray(arr, k))


// bruit force

// for(let i=0;i<arr.length;i++){ // 0 , 1
//     flag = 0
//     if(i+k<=arr.length){
//     for(let j=i;j<i+k;j++){ // 3 ,
//         flag++
//     }
// }
//     console.log(flag)
//     if(flag === k) count++
// }




