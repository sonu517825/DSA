// given an array of size n find the maximum value in a current window of size w window is sliding from left to right


/*

 * [|1,3,1|, -3,5,3,6,7] => 3
 * [1,|3,1,-3|,5,3,6,7]  => 3
 * [1,3,|1,-3,5|,3,6,7]  => 5
 * [1,3,1,|-3,5,3|,6,7]  => 5
 * [1,3,1,-3,|5,3,6|,7]  => 6
 * [1,3,1,-3,5,|3,6,7|]  => 7
 
 */


// n = 8  w = 3   n-w+1 => 8-3+1 => 6

//total number of window formof size w in an array having size n => n-w+1

//brute force Naive approach


// let result = []
// const arr = [1, 3, -1, -3, 5, 3, 6, 7]
// let w = 3
// let n = arr.length;


// for (let currWindow = 0; currWindow <n - w +1; currWindow++) {
//     var max = arr[currWindow];

//     // find the maximum value from a window of size w
//     for (let i = currWindow; i < currWindow + w; i++) {

//         // update the max variable if current value of arr at index i is greater then maximum
//         if (max < arr[i]) {
//             max = arr[i];
//         }

//     }

//     result.push(max);

// }

// console.log(result);

// Time complexity => total window (n-w+1) each window runs w times   total tc = (n-w+1)*w -= O(nw)


// [1, 3, -1, -3, 5, 3, 6, 7]
// observation window size is 3

// [     {1,3,-1},-3,5,3,6,7      ]   maximum = 3

// [     1,{3,-1,-3},5,3,6,7      ]   maximum = 3

// [     1,3,{-1,-3,5},3,6,7      ]   maximum = 5

// [     1,3,-1,{-3,5,3},6,7      ]   maximum = 5

// [     1,3,-1,-3,{5,3,6},7      ]   maximum = 6

// [     1,3,-1,-3,5,{3,6,7}      ]   maximum = 7



// we will push element in window in an start way
// in which case element will not needed in window(remove ho jaega)
// 1 case => element does not inside the window
// 2 case => if element inside curr window is less then incoming element(from last)
//else append element in last of window


let result = []
const arr = [7, 3, -1, -3, 5, 3, 6, 1].sort()
let w = 3
let n = arr.length;


const deque = [];   // not compare first index
for (let cel = 0; cel < w + 1; cel++) {
    while (deque.length > 0 && arr[cel] >= deque[deque.length - 1]) {
        deque.pop();  //removing element from last from deque which is less than in coming element
    }
    deque.push(cel);
}  // 1 st   cel =0 , deque [0]   2nd   cel = 1 , deque lenght true , arr[1] ,3 >=0 deque = [1] , 2


console.log(deque);  // [1,2]

// const arr = [1, 3, -1, -3, 5, 3, 6, 7]
for (let cel = w; cel < n; cel++) {

    result.push(arr[deque[0]])  // 3
    while (deque.length > 0 && arr[cel] >= deque[deque.length - 1]) {  // -3 >= 2
        deque.pop();//removing element from last from deque which is less than in coming element
    }

    while (deque.length > 0 && cel - w >= deque[0]) {  //  3 - 3 >= 1
        deque.shift();//removing element from front from deque which is less than in coming element  
        //in reality deque O(1) //shift ki time complexity O(n) hoti hai
    }
    deque.push(cel);  //deque [5,4,3] //jo incoming element aarha is 3 wihch is lesser then the last element  present in side the queue
}
result.push(arr[deque[0]]); //last window front element os maximum

console.log(result);

// //O(n-w+1+2w(at max)) => O(n+w) => O(n)

