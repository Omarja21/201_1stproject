'use strict';
function welcomMessage(){
    let Greeting =prompt("What is you Name Good sir?")
    document.getElementById("welcome").innerHTML= "Hello " + Greeting + " nice to see this lovely name <3"
}
welcomMessage();
alert("Please answer the questions with yes or no OR y/n");
function askUsers(){
let strOne= prompt("Do I love cookies?") 
let strTwo= prompt("Am I over 18?")
let strThree= prompt("Do you think I support  barcelona?")
let strFour = prompt("Do you think I like mansaf?")
let strFive = prompt("Do you think I love programming?")
let QuestionOne= strOne.toUpperCase();
let questionTwo= strTwo.toUpperCase();
let questionThree= strThree.toUpperCase();
let Questionfour= strFour.toUpperCase();
let Questionfive= strFive.toUpperCase();
if (QuestionOne=== "y", "yes"){
    console.log(true);
} else {console.log(false)}
if (questionTwo=== "y", "yes" ){
    console.log(true);
} else {console.log(false)}
if (questionThree=== "y", "yes"){
    console.log(true);
} else {console.log(false)}
if (Questionfour=== "y", "yes","y".toUpperCase, "yes".toUpperCase){
    console.log(true);
} else {console.log(false)}
if (Questionfive=== "y", "yes"){
    console.log(true);
} else {console.log(false)}
document.getElementById("test").innerHTML= "And these were your answers for the Questions: "+ "<br>" +  "Do I love cookies?" + QuestionOne + "<br>" +" Am I over 18? " + questionTwo +"<br>" +
 " Do you think I support  barcelona? " + questionThree +"<br>" + " Do you think I like mansaf? " + Questionfour + "<br>" +" Do you think I love programming? " + Questionfive ; 
}
askUsers();