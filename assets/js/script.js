
var clickedBtn = document.querySelector("#clicked")

var hsEl = document.querySelector("#highscore");
var timerEl = document.querySelector("#timer");
var btnEl = document.querySelector("#clicked");



// start function
var startQuiz = function(){}
    


// // create array to hold answers for saving 
// var answers = [];
// // variable to store HTML 
// var output = [];



// countdown timer attached to timer
document.getElementById("clicked").addEventListener("click", function(){
    var timeleft = 5;

    var downloadTimer = setInterval(function function1(){
    document.getElementById("timer").innerHTML = timeleft + " "+"";

    timeleft -= 1;
    if(timeleft <= -1){
        clearInterval(downloadTimer);
        document.getElementById("timer").innerHTML = "Times up!"
    }
    }, 1000);

    console.log(clicked);
});
    





//questions
var Questions = [
{
    question: "Commonly used data types DO not include:",
    answers: {
        1: "strings",
        2: "booleans",
        3: "alerts",
        4: "numbers"
    },
    correctAnswer: "3"
},
{
    question: "The condition in an if / else statement is enclosed with __________.",
    answers: {
        1: "quotes",
        2: "curly brackets",
        3: "parenthesis",
        4: "square brackets"
    },
    correctAnswer: "3"
},
{
    question: "Arrays in JavaScript can be used to store __________ ",
    answers: {
        1: "numbers and strings",
        2: "other arrays",
        3: "booleans",
        4: "all of the above"
    },
    correctAnswer: "4"
},
{
    question: "String values must be enclosed within __________ when being assigned to variables ",
    answers: {
        1: "commas",
        2: "curly brackets",
        3: "quotes",
        4: "parenthesis"
    },
    correctAnswer: "3"
},
{
    question: "A very useful tool used during development and debugging from printing content to the debugger is:",
    answers: {
        1: "JavaScript",
        2: "terminal/bash",
        3: "for loops",
        4: "console.log"
    },
    correctAnswer: "4"
}
];



// results function
var viewResults = function(){}











// click to begin quiz
clickedBtn.addEventListener("click", startQuiz);

// call start quiz
startQuiz()
