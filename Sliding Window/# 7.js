// anagram , jumble ,    =>    No. of  letter before === No. of letter after
// jumble means kese bhe character ko aap pahle likh sakte ho 
// anagra =>

// suppose pattern  => for    => orf , rfo  in an order


// P.S. =>  given a string 'aabchaavbcsgadesfac'   and given a pattern 'abcc'  find total no. anagrams
// count which is accure in string and  anagram ganarate from pattern string



// total No. of anagrams = factorial of length of string   =>  ! of length of str

// abcc => ! 4 => 4! => 4*3*2*1  => 24 possible anagrams

// after this you can match from any string matching algorithms => like kmp phir es se search kr lo

// yha  complexicty he n ! aa jayegi jo ki bahut max hai






// method 1 

// find all posible sub string
// map the substring 
// in this map check the pattern ke pattern ke sare cxharacter esme hai ya nhe
// agar hoga to hum map me uske value - kar dege
// if all character is present than all value of map is zero
// now check map ke map ke sare value zero hai ya nhe


function areAnagram(s1, s2) {  // cac  , bca=> yea fix hai 

    let m = new Map();
    console.log(s1, s2, m)


    // step 2 =>  create map of substring
    for (let i = 0; i < s1.length; i++) {
        if (!m.has(s1[i])) m.set(s1[i], 1)
        else m.set(s1[i], m.get(s1[i]) + 1)

        // {
        //    let cnt = m.get(s1[i]);   //   =>  optional
        //    m.delete(s1[i]);   //   =>  optional
        //    m.set(s1[i], cnt + 1);   //   =>   optional
        //}

    }



    // step 3  =>  check all character of pattern
    for (let j = 0; j < s1.length; j++) {
        if (!m.has(s2[j])) return false;
        else m.set(s1[j], m.get(s1[j]) - 1)
        console.log(m)
        // {
        //     let cnt = m.get(s2[j]);  // =>  optional
        //     m.delete(s2[j]);   //  =>  optional
        //     m.set(s2[j], cnt - 1); //   =>   optional
        // }


    }


    // step 4  =>   check map all value have zero or not
    for (const valueOfPair in m.values())
        if (valueOfPair !== 0) return false

    return true;
}



// step 1 =>  find substring of length pattern
function anagramCount1(text, word) {
console.log(text , word)
    let res = 0;
    for (let i = 0; i < text.length - word.length + 1; i++)  // find all posible sub strings => n-k+1
        if (areAnagram(text.substring(i, i + word.length), word)) res++;
    return res;


}

//let str = 'abcacb'
//let pattern = 'bca'

//let result = anagramCount(str, pattern)

//console.log(result)








// method 2



function anagramCount2(str, pattern) {


    // step 1 => make a map of pattern
    let hashMap = new Map();
    for (let i = 0; i < pattern.length; i++)
        if (hashMap.has(pattern[i])) hashMap.set(pattern[i], hashMap.get(pattern[i]) + 1)
        else hashMap.set(pattern[i], 1)  // => a:3 , b:1


    // step 2 => start traversing over string from sliding window
    let startWindow = 0
    let endWindow = 0
    let distintCount = hashMap.size  // => 2
    let res = 0


    while (endWindow < str.length) {  // aab aaba a

        if (hashMap.has(str[endWindow])) { // a,a,b,a => 

            hashMap.set(str[endWindow], hashMap.get(str[endWindow]) - 1) // a=2,1,0,0       b=-1
            if (hashMap.get(str[endWindow]) === 0)
                distintCount--   // 0,0 // 1
        }

        if (endWindow - startWindow + 1 < pattern.length) { // s =0 e = 3  // s=1 e =4
            endWindow++
        }
        else {
            if (endWindow - startWindow + 1 === pattern.length) { // s=0  e = 3
                if (distintCount === 0) res++  // 2
            //    console.log(str[startWindow], startWindow, endWindow, hashMap) //=> { 'b' => 0, 'c' => 0, 'a' => 1 }  dis Count 1
                if (hashMap.has(str[startWindow])) { // a ,a,b
                    hashMap.set(str[startWindow], hashMap.get(str[startWindow]) + 1)  // a:1,b:1
                    if (hashMap.get(str[startWindow]) === 1) distintCount++  // 2
                }
                startWindow++
                endWindow++
            } // s=3 , e = 6
        }
    }
    return res
}


// let str = "forxxorfxdofr"
// let pattern = "for"
//aabaabaa
//      aaba
let str = 'cabaabaa'
let pattern = 'aaba'


let result = anagramCount2(str, pattern)

console.log(result)
