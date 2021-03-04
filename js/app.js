'use strict';
    let Greeting =prompt("What is you Name Good sir?")
    
    document.getElementById("welcome").innerHTML= "Hello " + Greeting + " nice to see this lovely name <3"


alert("Please answer the questions with yes or no OR y/n");


let count=0;  
let strOne= prompt("Do I love cookies?");
let strTwo= prompt("Am I over 18?");
let strThree= prompt("Do you think I support  barcelona?");
let strFour= prompt("Do you think I like mansaf?");
let strFive= prompt("Do you think I love programming?");

function guessgame(){


let QuestionOne= strOne.toUpperCase();
let QuestionTwo= strTwo.toUpperCase();
let QuestionThree= strThree.toUpperCase();
let Questionfour= strFour.toUpperCase();
let Questionfive= strFive.toUpperCase();


if (QuestionOne== 'Y'|| QuestionOne=='YES' ){
    console.log(true);
    count++;
} else {
    console.log(false);
}

if (QuestionTwo== 'Y'|| QuestionTwo=='YES' ){
    console.log(true);
    count++;
} else {
    console.log(false);
}
if (QuestionThree== 'Y'|| QuestionThree=='YES' ){
    console.log(true);
    count++;
} else {
    console.log(false);
}
if (Questionfour== 'Y'|| Questionfour=='YES' ){
    console.log(true);
    count++;
} else {
    console.log(false);
}
if (Questionfive== 'Y'|| Questionfive=='YES' ){
    console.log(true);
    count++;
} else {
    console.log(false);
}
document.getElementById("test").innerHTML= "And these were your answers for the Questions: "+ "<br>" +  "Do I love cookies?" + QuestionOne + "<br>" +" Am I over 18? " + QuestionTwo +"<br>" +
 " Do you think I support  barcelona? " + QuestionThree +"<br>" + " Do you think I like mansaf? " + Questionfour + "<br>" +" Do you think I love programming? " + Questionfive ; 
}
guessgame();
for(var i=0; i<=3; i++){
    let strsix =  prompt("guess the number I like?");
    let Questionsix = parseInt(strsix);
    if (Questionsix>7){
    alert("too high");
    } else if(Questionsix<7){
    alert("too low");
    } else{
        count++;
        break;
    }
}
alert('my lucky number is 7');
alert("Now it is time for the guessing game about  what is my favourite color");
var color=["BLUE", "CYAN", "YELLOW", "RED"];
var flag= false;
for (let i = 1; i <= 6; i++) {
    let questionSeven=prompt("What is my favourite color");
    switch(questionSeven.toUpperCase()){
        case color[0]:
            alert('correct answer');
            flag=true;
            count++;
            break;
        case color[1]:
            alert('correct answer');
            flag=true;
            count++;
            break;
        case color[2]:
            alert('correct answer');
            flag=true;
            count++;
            break;
        case color[3]:
            alert('correct answer');
            flag=true;
            count++;
            break;
        default: 
        alert('try again'); 
        break;   
    }
    if(flag){  
        break;
    }
}
alert('you get '+ count+ ' of 7');
alert('thanks you for playing my game');
