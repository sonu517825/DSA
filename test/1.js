/*



Description
Given a string, with certain lowercase letters. You are allowed to do at most one operation on this string, 
where, you can delete an entire substring from the given string. You need to tell, by doing the above-mentioned 
operation at most once, can you create the string “programming” from the given string.

In case you can, print Yes, else, print No.

Input Format –

The first line of input contains a single integer T, denoting the number of test cases. Then, 
T strings follow. For each of those strings, you need to tell, if you can generate the substring “programming”, 
by doing the given operation at most once.

Output Format –

Print T lines, where each line shall contain a single string – Yes (if the job can be done) or No (if the job
     cannot be done).

note
Constraints
1 <= T <= 100

1 <= string size <= 1000

view_list
Examples
Input:
4

programming

abcdprogrammingabcd

rammingabcdprog

progabcdramming

Output:
Yes

No

No

Yes

Explanation:
in the string "progabcdramming", we can delete the substring "bcd" to make it "programming".



*/