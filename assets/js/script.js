

const clickedBtn = document.querySelector("#clicked");
const qContainer = document.querySelector(".q-container");
const questBox = document.querySelector(".q-box");
const everyAnswer = document.querySelector(".every-answer")
let response = document.querySelector(".response");
let timer = document.querySelector("#timer")



//const endQuiz = function(){}
    // END QUIZ LOGIC and show results/highscore with initials entered



// start function
const startQuiz = function() {
    console.log("started")
    questionIndex = 0;
    };
    
    // countdown timer attached to timer (starts on click)
    document.getElementById("clicked").addEventListener("click", function(){
        var timeleft = 60;
    
        var downloadTimer = setInterval(function function1(){
        document.getElementById("timer").innerHTML = timeleft + " "+"";
    
        timeleft -= 1;
        if(timeleft <= -1){
            clearInterval(downloadTimer);
            document.getElementById("timer").innerHTML = "Times up!"
        }
        }, 1000);
        
        showQuestions();
    });
    // timer end //


//questions//
var questionsArray = [
    {
        questionText: "Commonly used data types DO not include:",
        choice: ["Strings", "Booleans", "Alerts", "Numbers"],
        answer: "Alerts",
    },
    {
        questionText: "The condition in an if / else statement is enclosed with __________.",
        choice: ["Quotes", "Curly brackets", "Parenthesis", "Square brackets"],
        answer: "Parenthesis",
    },
    {
        questionText: "Arrays in JavaScript can be used to store __________ ",
        choice: ["Numbers and Strings", "Other arrays", "Booleans", "All of the above"],
        answer: "All of the above",
    },
    {
        questionText: "String values must be enclosed within __________ when being assigned to variables ",
        choice: ["Commas", "Curly brackets", "Quotes", "Parenthesis"],
        answer: "Quotes",
    },
    {
        questionText: "A very useful tool used during development and debugging from printing content to the debugger is:",
        choice: ["JavaScript", "Terminla/bash", "For loops", "Console.log"],
        answer: "Console.log"
    }
    ]
//questions end//


    

// show questions //  
const showQuestions = function(){
    let currQuestion = questionsArray[questionIndex];
    
    let qContainer = document.createElement("div");
    questBox.prepend(qContainer); // prepend to attach to start of array
    
    let questionTitle = document.createElement("h3");
    questionTitle.textContent = currQuestion.questionText;
    qContainer.appendChild(questionTitle);

    let answerContainer = document.createElement("ol");
    everyAnswer.appendChild(answerContainer);

    for (let i = 0; i < currQuestion.choice.length; i++) {
        var answerChoice = document.createElement("li");
        answerChoice.className = "answer";
        answerChoice.textContent = currQuestion.choice[i];

      var clickedAnswer = answerChoice.setAttribute("id", currQuestion.choice[i]);//<<<<<<<<<<

      answerContainer.appendChild(answerChoice);
    }

    answerContainer.addEventListener("click", function(event) {
        answerChoice = event.target;
        
        // answered CORRECTLY
        if (answerChoice.id == currQuestion.answer) {
            response.innerHTML = '<h3>Correct</h3>';
            answerContainer.appendChild(response);
            questionIndex++;
        }
        // answered INCORRECTLY
        else {
            response.innerHTML = '<h3>Incorrect</h3>'; 
            answerContainer.appendChild (response);
            //timeleft = timeleft =-10; // 10 sec off for incorrect
            //timer =-10; // 10 sec off for inccorect
            questionIndex++;
        }

        const displayNextQuestion = setTimeout(function() {
            if (questionIndex < questionsArray.length) {
                qContainer.remove();
                showQuestions();
            }
            else {
                endQuiz();
            }
        }, 1000);
    })
}








selectanswer = function(){}


showResults = function(){}
// results function
//viewResults = function(){}
    





//IF FALSE REMOVE 10 SECONDS - ALERT INCORRECT AND MOVE ONTO NEXT QUESTION
//IF CORRECT - ALERT CORRECT









// call start quiz
startQuiz()

// click to begin quiz
clickedBtn.addEventListener("click", startQuiz)


