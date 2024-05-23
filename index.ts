#! /usr/bin/env node 
import inquirer from "inquirer" ;

const quiz : {
    question1 : string ;
    question2 : string ;
    question3 : string ;
    question4 : string ;
    question5 : string ;
    question6 : string ;
    question7 : string ;
    question8 : string ;
    question9 : string ;
    question10 : string ;

} = await inquirer.prompt(
    [
        {
           name : "question1",
           type : "list",
           message : "Q1. What is Typescript??",  
           choices : ["a) A superset of JavaScript","b) A framework for building web applications","c) A programming language developed by Microsoft", "d) A library for creating animations"]
        },
        {
            name : "question2",
            type : "list",
            message : "Q2. Which keyword is used to define a variable in TypeScript with a specific type?",
            choices : ["a) var","b) let","c) const","d) type"]
        },
        {
            name : "question3",
            type : "list",
            message : "Q3. Which of the following is NOT a basic TypeScript type?",
            choices : ["a) boolean", "b) string" , "c) number" , "d) array"]
        },
        {
            name : "question4",
            type : "list",
            message : "Q4. What is the file extension for TypeScript files?",
            choices : ["a) .js", "b) .ts" , "c) .html" , "d) .CSS"]
        },
        {
            name : "question5",
            type : "list",
            message : "Q5. Which keyword is used to declare a function in TypeScript?",
            choices : ["a) func", "b) function" ,"c) def" , "d) fn"]
        },
        {
            name : "question6" ,
            type : "list" ,
            message : "Q6. What is the syntax for defining an interface in TypeScript?",
            choices : ["a) interface MyInterface {}","b) type MyInterface = {}", "c) class MyInterface {}","d) struct MyInterface {}"]
        },
        {
            name : "question7" ,
            type : "list",
            message : "Q7. Which operator is used for type assertion in TypeScript?",
            choices : ["a) < " , "b) > " ,"c) :: " ,"d) as "]
        },
        {
            name : "question8" ,
            type : "list" ,
            message : "Q8. Which of the following is NOT a valid access modifier in TypeScript?",
            choices : ["a) public","b) private","c) protected","d) internal"]
        },
        {
            name : "question9",
            type : "list",
            message : "Q9. What is the TypeScript feature that allows you to combine types to form new ones?",
            choices : ["a) Type casting", "b) Type inference", "c) Type blending","d) Type composition"]
        },
        {
            name : "question10",
            type : "list",
            message : "Q10. Which of the following is NOT a valid TypeScript data type?",
            choices : ["a) any" , "b) void" , "c) null" , "d) undefined"]
        }
    ]
);
let score : number = 0 ;

switch (quiz.question1){
    case "a) A superset of JavaScript":
             console.log("1. Correct !!");
        ++score;
        break;
        default :
             console.log("1. Incorrect !!");
}
switch (quiz.question2){
    case "d) type":
             console.log("2. Correct !!");
         ++score   
          break ;
         default :
             console.log("2. Incorrect");       
}
switch(quiz.question3){
    case "d) array":
             console.log("3. Correct !!");
        ++score;
        break ;
        default :
             console.log("3. Incorrect !!");  
}
switch(quiz.question4){
    case "b) .ts":
             console.log("4. Correct !!");
        ++score;
        break ;
        default :
             console.log("4. Incorrect !!");        
}
switch (quiz.question5){
    case "b) function":
             console.log("5. Correct !!");
        ++score ;
        break ;
        default :
             console.log("5. Incorrect !!");
}
switch (quiz.question6){
    case "a) interface MyInterface {}":
             console.log("6. Correct !!");
        ++score ;
        break ;
        default :
             console.log("6. Incorrect !!");
}
switch(quiz.question7){
    case "d) as ":
             console.log("7. Correct !!");
        ++score ;
        break ;
        default :
             console.log("7. Incorrect !!");      
}
switch (quiz.question8){
    case "d) internal":
             console.log("8. Correct !!");
        ++score ;
        break ;
        default:
             console.log("8. Incorrect !!");
}
switch (quiz.question9){
    case "d) Type composition":
             console.log("9. Correct !!");
        ++score ;
        break ;
        default :
              console.log("9. Incorrect !!");        
}
switch (quiz.question10){
    case "c) null" :
             console.log("10. Correct !!");
        ++score ;
        break ;
        default:
             console.log("10. Incorrect !!");        
}
console.log(` Your Score is : " ${score} "`);
