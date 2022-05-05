/*



11. How do you decide which code should go in an application level middleware vs which one is suitable for 
a route level middleware? Explain with example.

Ans: router level middleware- E.g:-router.get(‘/user/:userId/statement’, <routeMiddleware>’, handler);
     Application level middleware- E.g: app.use(‘/’, route);
     app.use(express.json());



12. Name the middlewares you have used in your assignments and project implementation.

Ans: mostly used router level middleware in assignments and projects and application level middleware.



13. What is the main purpose of debugger in VS Code (or other IDEs)

Ans: The main purpose of debugger is to debug the code or remove the bugs/errors from the code in the faster way
     by using the vscode builtin model of debug called as debugger.



14. How do you use a debugger. Show it for the current project you are working on.

Ans: Step 1: Reproduce the bug.
    Step 2: Get familiar with the Sources panel UI.
    Step 3: Pause the code with a breakpoint.
    Step 4: Step through the code.
    Step 5: Set a line-of-code breakpoint.
    Step 6: Check variable values. Method 1: The Scope pane. Method 2: Watch Expressions. ...
    Step 7: Apply a fix.
    Next steps.



15. What all options are there in a debugger(VS Code)?

Ans: Breakpoint, Log points, Data inception, variable substitution
     Continue / Pause F5
    Step Over F10
    Step Into F11
    Step Out Shift+F11
    Restart Ctrl+Shift+F5
    Stop Shift+F5



16. What does synchronous mean?

Ans: Every statement of code executed one by one. Its means that when function is called and has returned some value
     only then next line executed.
     for ex:
     console.log("I")
     console.log("eat")
     console.log("Mango")
     OUTPUT >> I
          eat 
          Mango



17. Where would you use synchronous functions?

Ans: synchronous means to be in a sequence, i.e. every statement of the code gets executed one by one. 
     So, basically a statement has to wait for the earlier statement to get executed.



18. What does asynchronous mean?

Ans: It allows program to be executed immediately without blocking the code,like synchronous method it doesn't wait
     for  earlier statement to get executed first.
     Each task executed completed independently.
     For ex:
    console.log("I")
    setTimeout(()=>{​
    console.log("eat")}​,2000)
    console.log("Mango")
    OUTPUT>> I
        Mango
        eat (after 2sec)




19. Where would you use asynchronous functions?

Ans: The purpose of async / await is to simplify the syntax necessary to consume promise-based APIs. 
     The behaviour of async / await is similar to combining generators and promises. 
     Async functions always return a promise.
     ex: const book = async(req, res) => {​
        const bookData = await bookModel.create()
        console.log(bookData)
        return res.send({​data : bookData}​)
    }​




20. What is nodemon used for?

Ans: nodemon is package/dependency in node.js which is install by using command npm i nodemon, it is used to run the 
     application after each change occurs in program it automatically starts the terminal and run the code.
     It helps to run the code or start the terminal without again and again using node with filename.
     we just have to use the command nodemon filename and start the terminal once it startd it will remain start until
     changes is going in code.
    

     

*/  
  

