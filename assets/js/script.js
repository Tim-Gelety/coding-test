var scoreCount = 0;
// simplifications 

var body = document.body;
// page elements 
var h1El = document.createElement('h1');
var h2El = document.createElement('h2');
var startBtn = document.createElement("button");
var correctBtn = document.createElement("button");
var incorrectBtn = document.createElement("button");

// attributes 
h1El.setAttribute('style', 'text-align: center');
correctBtn.setAttribute('id', 'correct');
incorrectBtn.setAttribute('id','incorrect');

// text content 
startBtn.innerHTML = "START";
h1El.textContent = "START HERE --->";
h2El.textContent = "click a button";
correctBtn.innerHTML = "CORRECT";
incorrectBtn.innerHTML = "INCORRECT";


// append to page 
body.appendChild(h1El);
h1El.appendChild(startBtn);

 var questionEl = function() {
    h1El.textContent = "Question";
    body.appendChild(h2El);
    body.appendChild(correctBtn);
    body.appendChild(incorrectBtn);
    // target the thing we are clicking on 
    var correctAnswer = document.querySelector("#correct");
    // click it to change the html elements
    correctAnswer.addEventListener('click', answerRight);
    var incorrectAnswer = document.querySelector("#incorrect");
// click it to change the html elements
incorrectAnswer.addEventListener('click', answerWrong);
};

var answerRight = function() {
    scoreCount++;
    console.log(scoreCount)
};
var answerWrong = function() {
    incorrectBtn.innerHTML = "CLICKED";
};
// target the thing we are clicking on 
var startQuiz = document.querySelector("button");
// click it to change the html elements
startQuiz.addEventListener('click', questionEl);
