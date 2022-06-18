//possible solution(brute force)
//find all the substring and check each substring with k character (O(n^2))
//subString find O(n) each subString check time O(n*3)

//character fixed (0-255)  //26(a-z)


function isCurrentWindowValid(count, k) {

    let curr_uc = 0;
    for (let i = 0; i < count.length; i++) {
        if (count[i] > 0) {   ///current window valid hai ki nh wahi ckeck kar rhe hai
            curr_uc++;
        }
    }
    return k >= curr_uc;
}


function findKthLargestSubstring(str, k = 3) {

    let uc_count = 0;  //unique character count
    let count = [];  //array contains the frequency of character

    //a-z(26)  //indexing of array is 0,1,2...

    for (let i = 0; i < 26; i++) {
        count.push(0);
    }

    //count the number of unqiue characters
//    console.log(str[0].charCodeAt(0));
    for (let i = 0; i < str.length; i++) {

        if (count[str[i].charCodeAt(0) - 'a'.charCodeAt(0)] === 0) {
            uc_count++;
        }
        count[str[i].charCodeAt(0) - 'a'.charCodeAt(0)]++;  //jitne non-zero hoge unte unique character hoge
        
    }
    console.log(count, uc_count);
    //if number of unqiue character is less than k then substring cannot possible
    if (k > uc_count) {
        console.log("substring can not formed")
        return
    }

    //reset the count array
    for (let i = 0; i < 26; i++) {
        count[i] = 0;
    }

    let start = 0;
    let end = 0;

    let max_window_size = 1;
    let max_window_start = 0;
    count[str[0].charCodeAt(0) - 'a'.charCodeAt(0)]++;

    for (let i = 1; i < str.length; i++) {
        count[str[i].charCodeAt(0) - 'a'.charCodeAt(0)]++;  //tracking the character present inside the window
        end++;  //increasing the window size

        while (!isCurrentWindowValid(count, k)) {
            count[str[i].charCodeAt(0) - 'a'.charCodeAt(0)]--;
            start++;
        }

        if (end - start + 1 > max_window_size) {
            max_window_size = end - start + 1;
            max_window_start = start;
        }
    }
    console.log(max_window_size, max_window_start)
}

findKthLargestSubstring("aabacbebebe", 3)