// simplifications 
var body = document.body;

// variables 
var scoreCount = 0;
var timeCount = 0;
var questionNumber = 1;

// page elements 
var titleEl = document.createElement('h1');
var mathQuestionEl = document.createElement('h2');
var timerEl = document.createElement('h3');
var playerName = document.createElement('input')
var aBtn = document.createElement("button");
var bBtn = document.createElement("button");
var cBtn = document.createElement("button");
var dBtn = document.createElement("button");
var startBtn = document.createElement("button");
var highScoresBtn = document.createElement("button");

// attributes 
titleEl.setAttribute('style', 'text-align: center');
playerName.setAttribute('type', 'text', 'id', 'user');
aBtn.setAttribute('id', 'a');
bBtn.setAttribute('id', 'b');
cBtn.setAttribute('id', 'c');
dBtn.setAttribute('id', 'd');
startBtn.setAttribute('id', 'start');
highScoresBtn.setAttribute('id', 'highscore');

// text content 
startBtn.innerHTML = "START";
titleEl.textContent = "START HERE --->";

// append to page 
body.appendChild(timerEl);
body.appendChild(titleEl);
titleEl.appendChild(startBtn);
body.appendChild(mathQuestionEl);
body.appendChild(playerName);
body.appendChild(aBtn);
body.appendChild(bBtn);
body.appendChild(cBtn);
body.appendChild(dBtn);

// add hide class 

aBtn.classList.add("hide");
bBtn.classList.add("hide");
cBtn.classList.add("hide");
dBtn.classList.add("hide");
playerName.classList.add("hide");
// functions 

var questionEl = function () {
    titleEl.textContent = "Question " + questionNumber;

    timerGame()
    randomMath()
    startQuiz.classList.add("hide")
    // target the correct id  
    var correctAnswer = document.querySelector("#a");
    // click it to run answerRight function
    correctAnswer.addEventListener('click', answerRight);

    // target the incorrect id 
    var incorrectAnswer = document.querySelector("#b");
    // click it to run answerWrong function
    incorrectAnswer.addEventListener('click', answerWrong);

    // target the incorrect id 
    var incorrectAnswer = document.querySelector("#c");
    // click it to run answerWrong function
    incorrectAnswer.addEventListener('click', answerWrong);

    // target the incorrect id 
    var incorrectAnswer = document.querySelector("#d");
    // click it to run answerWrong function
    incorrectAnswer.addEventListener('click', answerWrong);

};

var timerGame = function () {
    timeCount = 60
    var timeInterval = setInterval(function () {
        if (timeCount > -1) {
            timerEl.textContent = "TIME LEFT: " + timeCount + " seconds";

            timeCount--;
        } else {
            clearInterval(timeInterval)
            endGame()
        }
    }, 1000);
}

var randomMath = function () {
    var randA = (Math.floor(Math.random() * 11 + 1));
    var randB = (Math.floor(Math.random() * 11 + 1));
    mathQuestionEl.textContent = randA + " x " + randB + " = ??";
    var validAnswer = randA * randB;
    aBtn.innerHTML = validAnswer;
    bBtn.innerHTML = validAnswer + 1;
    cBtn.innerHTML = validAnswer - 1;
    dBtn.innerHTML = validAnswer + 3;
    aBtn.classList.remove("hide");
    bBtn.classList.remove("hide");
    dBtn.classList.remove("hide");
    cBtn.classList.remove("hide");


}

var answerRight = function () {
    scoreCount++;
    questionNumber++;
    randomMath()
    titleEl.textContent = "Question " + questionNumber;
};

var answerWrong = function () {
    randomMath()
    timeCount = timeCount - 5;
    questionNumber++;
    titleEl.textContent = "Question " + questionNumber;
};

var endGame = function () {
    titleEl.textContent = "GAMEOVER"
    mathQuestionEl.textContent = "SCORE: " + scoreCount;

    aBtn.classList.add("hide");
    bBtn.classList.add("hide");
    cBtn.classList.add("hide");
    dBtn.classList.add("hide");

    playerName.classList.remove("hide");

    highScoresBtn.innerHTML = "SAVE"
    body.appendChild(highScoresBtn);
    var highScores = document.querySelector("#highscore");
    highScores.classList.remove("hide");
    highScores.addEventListener('click', function () {
        // TODO: save the input in the bax as var userName
        var userName = document.getElementById("user");
        //  var saveScore = localStorage.setItem(userName,scoreCount);
        //  console.log(saveScore);
        console.log(userName);
        highScores.classList.add("hide");
        scoreScreen();
    });



};

var scoreScreen = function () {

    questionNumber = 1;
    scoreCount = 0;
    titleEl.textContent = "HIGHSCORES";
    mathQuestionEl.textContent = "HALL OF FAME:"
    playerName.classList.add("hide");


    startQuiz.classList.remove("hide");
    startQuiz.textContent = "AGAIN?"
    body.appendChild(startBtn);
};

// target the thing we are clicking on 
var startQuiz = document.querySelector("#start");
// click it to change the html elements
startQuiz.addEventListener('click', questionEl);
