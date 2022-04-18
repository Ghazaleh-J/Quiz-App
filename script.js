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



var timeLeft = 60;
var curentQuestionIndex = 0;
var userChoice = [];




function counter (){

    var timer = setInterval(function(){
        timeLeft--;
        timerr.innerText = timeLeft;
          if (timeLeft === 0) {
            clearInterval(timer);
            lastScreen();
        }

    },1000);    
}




var button = document.getElementById("start");
button.addEventListener("click", function(){
    intro.setAttribute("style", "display:none");
    showQuestion();
    counter();
    
});



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
            event.preventDefault();
            correctAnswer(event.target.innerText);
            curentQuestionIndex++;
            showQuestion();
        } )
    }
}


function correctAnswer (){
    if (userChoice !== questionList[curentQuestionIndex].correct){
        timeLeft-=5;
    }
};

 


// function for what happen if the quiz ends (initial and score)  
function lastScreen (){
    questionContainer.setAttribute("style", "display:none");
        done.innerText = ("All Done!");
        score.innerText = ("Your final score is " + timeLeft);
        
        initialInput.innerText = ("Enter initials: ");
        var butt = document.createElement("input");
        butt.setAttribute("type", "text");
        lastScreenContainer.append(butt);
        var submitButton = document.createElement("button");
        submitButton.innerText = ("Submit");
        lastScreenContainer.append(submitButton);
        submitButton.onclick = saveHighScore;
    }
   


function saveHighScore(){
    var initial = valueInput.value;
    if (initial !== ""){
      var highScore = JSON.parse(window.localStorage.getItem("highScore")) || [];
      var newScore = {
          score : timeLeft,
          initial : initial
      };
      highScore.push(newScore);
      window.localStorage.setItem("highScore", JSON.stringify(highScore));
      window.location.href = "highScore.html";

    }
}

function check (e) {
    if (e.key === "'Enter")
    saveHighScore();
}
  