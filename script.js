// Reference DOM Elements variables
var intro = document.querySelector("#Intro");
var questionContainer = document.querySelector("#question-container");
var questionEl = document.querySelector("#question");
var answerContainer = document.querySelector("#answers");
var timerr = document.querySelector("#timer");
var finalContainer = document.querySelector("#lastScreenContainer");
var done = document.querySelector("#allDone");
var score = document.querySelector("#finalScore");
var inputt = document.querySelector("#initialInput");
var valueInput = document.querySelector("#inputValue")


// variables
var timeLeft = 60;
var curentQuestionIndex = 0;
var timer;


function counter (){

        timeLeft--;
        timerr.innerText = timeLeft;
          if (timeLeft <= 0) {
            lastScreen();
        }
}

// switch to questions page & start timer by clicking start button
var button = document.getElementById("start");
button.addEventListener("click", function(){
    intro.setAttribute("style", "display:none");
    showQuestion();
    counter();
    timer = setInterval(counter, 1000);
});

// list of questions/answers & correct answer
var questionList = [ {
    qTitle: "What is the capital of Netherlands?",
    choices: ["Arnhem", "Amsterdam", "Rotterdam", "Utrecht"],
    correct: "Amsterdam"
}, {
    qTitle: "Which country is NOT in Europe?",
    choices: ["Belgium", "Slovenia", "Denmark", "Morocco"],
    correct: "Morocco",
}, {
    qTitle: "What is the capital of Australia?",
    choices: ["Sydney", "Brisbane", "Melbourne", "Canberra"],
   correct:"Canberra",
}, {
    qTitle: "Which country has the longest coastline?",
    choices: ["Australia", "Canada", "China", "Netherlands"],
    correct: "Canada"
}, {
    qTitle: "Which US state has more people than all of Canada?",
    choices: ["Georgia", "Pennsylvania", "California", "Washington"],
    correct: "California",
}
];

// get questions with answers from the array
function showQuestion () {
    if (curentQuestionIndex === questionList.length ) {
       return lastScreen();   
    }

    questionEl.innerText = questionList[curentQuestionIndex].qTitle;
    var choices = questionList[curentQuestionIndex].choices;
    answerContainer.innerHTML = ""
    for (var i = 0; i < 4; i++) {
        var choiceButton = document.createElement("button");
        choiceButton.innerText = choices[i];
        answerContainer.append(choiceButton);
        choiceButton.addEventListener("click", function(event){
           var correctAnswer = (event.target.innerText);
           if (correctAnswer !== questionList[curentQuestionIndex].correct) {
               timeLeft-= 5;   // penalize time for wrong answers 
           }
            curentQuestionIndex++;
            showQuestion();
        });
    }
}



var butt = document.createElement("input");
var submitButton = document.createElement("button");

// function for what happen if the quiz ends (initial and score)  
function lastScreen (){
    clearInterval(timer);
    questionContainer.setAttribute("style", "display:none");
        done.innerText = ("All Done!");
        score.innerText = ("Your final score is " + timeLeft);  
        initialInput.innerText = ("Enter initials: ");
        butt.setAttribute("type", "text");
        lastScreenContainer.append(butt);
        submitButton.innerText = ("Submit");
        lastScreenContainer.append(submitButton);
        submitButton.onclick = saveHighScore;
     
    }
   
// get the user's input (initial) and save it in the local storage
function saveHighScore(){
    var initial = butt.value.trim();
    if (initial !== ""){
      var highScore = JSON.parse(window.localStorage.getItem("highScore")) || [];
      var newScore = {
          score : timeLeft,
          initial : initial
      };
      highScore.push(newScore);
      window.localStorage.setItem("highScore", JSON.stringify(highScore));
      window.location.href = "highscore.html";

    }
}