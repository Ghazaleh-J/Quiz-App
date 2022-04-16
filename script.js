var intro = document.querySelector("#Intro");
var questionContainer = document.querySelector("#question-container");
var questionEl = document.querySelector("#question");
var answerContainer = document.querySelector("#answers");
var curentQuestionIndex = 0;

var button = document.getElementById("start");
button.addEventListener("click", function(){
    intro.setAttribute("style", "display:none");
    showQuestion();
})





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
// if statement for correct answer/ user choice with the current question correct answer

function correctAnswer (userChoice){
    // if else statement

}

// function for what happen if the quiz ends (initial and score)
// function for adding an array of initial high score to local storage
//function for the timer / time left var global  -5 for wrong answer
// function similar for loop to display high scores
// local storage having an array of object to add to your local storage

    