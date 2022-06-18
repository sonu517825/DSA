/*

Q 1 : What do you understand by the Asymptotic Notations ?

Ans : Asymptotic analysis is a technique that is used for determining the efficiency of an algorithm that 
does not rely on machine-specific constants at represent time we avoid that contants. Or also we can say
it is a mathematical technique that is used to indicate the temporal complexity of algorithms.

The following are the three most common asymptotic notations.
1. Big O Notation    =>   max time
2. omega Notation    =>   min time
3. theta Notation    =>   avg time


Q 2 : Big O Notation

Ans : 

# Upper bond
# maximum time
# worth case


insertion sort : in the best case scenario, it takes linear time, and in the worst case, it takes quadratic time.
Insertion sort has a time complexity O(n^2). It is useful when we just have an upper constraint on an algorithm's 
time complexity.


f(n) = O( g(n) )   if

f(n)  <=  c * g(n)  ,  n >= n0    &   c =>  constant


for  =>  f(n) + c  =  g(n)  + c   =>  ||  -c  ||  * c    ||     /c    

for all both function have same grouth   =>   f(n)  ~==  g(n)



Q 3 : Omega Notation 

Ans : 

# lower bond
# minimum time
# best case

f(n)  = omega ( g(n) )   if

f(n)  >=  g(n) * c   ,  n > n0


if  =>  f(n)  <  g(n)  than we can say

f(n)  =  O( g(n) )  &&  

g(n)  =  omega ( f(n) )




but we can not say  

g(n) = O( f(n) )  ||

f(n)  =  omega ( g(n) )


Q 4 : Theta Notation  

Ans : 

# equal bond 
# average time
# average case


f(n)  =  theta g(n)  if

c2 * g(n)  <  f(n)  <  c1 * g(n)    ,   n > n0  &&  c1 , c2  =>  contant


if        f(n)  ~==  g(n)            OR          g(n)  ~==  f(n)

than      f(n)  =  theta ( g(n) )    OR          g(n)  =  theta ( f(n) )





****************************************    Two More    ******************************************

Q 5 : Little    o (oh)      Notation

Ans : 

# strictly  upper bond   

f(n) = o( g(n) )  if

f(n)  <  c * g(n)    ,    n >= n0



Q 6 : little    omega     Notation

Ans : 

# strictly   lower  bond

f(n)  =  little omega ( g(n) )   if

f(n) > c * g(n)    ,    n >= n0


*/

