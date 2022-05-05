/*

1. What does the runtime environment in Node Js mean?

Ans: As JavaScript only used to work/run with the browser.So to used JS code or run it on any local system. 
     NodeJs made it possible to execute that JS program on local machines and servers and all this possible
     due to JS engine that comes with Node Runtime environment.
     So, Node runtime environment helps to execute JS code by converting it into machine code.



2. What is npm? What is the command to install node js dependencies?

Ans: npm stands for Node Package Manager.It helps for installing various dependencies/packages and managing
     version of nodeJS on our system and also helps to install all the other dependencies with this command 
     as npm i <packagename>.



3. What is the role of package.json file in a node application? What is meant by the main module?

Ans: package.json file is created by using  npm init command with it node modulus and packagelock.json file
     also create. As this file store all the information of project like authorname,description,projectname,
     etc with its version. Also this file stored all the dependencies/packages with it's version in the package
     .json file. It helps to give signanl to npm as how to manage and run particular project by installing 
     relevent dependencies.
     Main Module is the main file of application/project, as it is the file through which our whole application
     is executed.
     for example index.js file of project, as it handles all the main function like express and all other 
     dependencies code, etc in it.



4. What are modules in Nodejs. Do you know any commonly used modules

Ans: Modules can be a single file or a collection of multiple files/folders.
     In Node.js all files we are creating with the extension of .js are the modules.
     we can use methods of any particular file/module in any other file by using module.exports so whatever
     you assign to module.exports will be exposed as a module to use it into anothor file by importing.
     commonly used modules are fs,os and _dirname, http etc.



5. How do you write functions and global variables in a module A and use them in module B

Ans: //module A

     function sum(n) {​
       let result = n+n;
     }​
     module.exports = {​moduleA}​


     //module B 

     const sum = require('./moduleA')  //importing  moduleA to moduleB 
     console.log(sum(8));




6. How do you import an external package? What code do you use for this?

Ans:  step1: install package by using the command as npm  i <packagename>
      step2: const <packagename> = require('packagename'); //importing the package
      for example npm i express
      const express = require('express')



7. What is express?

Ans: express is package of nodejs and it web application or backend framework that provide set of features
     for web application and mobile application. As it is used to provide handler requestwith HTTP at url 
     path(routes). Also it helps to create server side  web application faster and smarter.



8. How do you create routes in an express application

Ans: step1:create router object
     const router = express.Router();
     router.post('/apipath',handler)
     router.put('/apipath',handler)




9. What are middleware and why do you need them?

Ans:  Middleware is the function that have access to request object (req) and response object (res) and next 
      middleware function in application's request-response cycle. next() is callback function in middleware
      As it is third argument  have another function which call once middleware code is completed.
      Middleware function:
      Execute any code
      make changes to req and res object.
      end req-res cycle
      call next middleware in stack
      why we need it because it is used as code reuseability and also it maintain flow of control.



10. What are route and application-level middleware?

Ans: Route level api are route based which code is written in the controller file and it connect with route file
     with its path as it only execute code of particular file or function.
     These are the ones which we define and can be used on routes that we want to protect or have some common 
     that we want to execute.
     Ex: router.put('/users/:userId',<routermiddleware>,handler)
     Application level middleware are common to all end points and will be invoked whenever we hit that api.
     Ex: app.use('/', route);
     app.use(express.json());


*/



