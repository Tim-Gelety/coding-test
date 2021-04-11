// simplifications 
var body = document.body;

// variables 
var scoreCount = 0;
var timeCount = 0;
var questionNumber = 0;

// page elements 
var titleEl = document.createElement('h1');
var mathQuestionEl = document.createElement('h2');
var timerEl = document.createElement('h3');
var hallOfFameEl = document.createElement('ol');
var playerName = document.createElement('input')
var aBtn = document.createElement("button");
var bBtn = document.createElement("button");
var cBtn = document.createElement("button");
var dBtn = document.createElement("button");
var startBtn = document.createElement("button");
var highScoresBtn = document.createElement("button");

// attributes 
titleEl.setAttribute('style', 'text-align: center');
playerName.setAttribute('type', 'text',);
playerName.setAttribute('id', 'user');
hallOfFameEl.setAttribute('id', 'savedGame');
aBtn.setAttribute('id', 'a');
bBtn.setAttribute('id', 'b');
cBtn.setAttribute('id', 'c');
dBtn.setAttribute('id', 'd');
startBtn.setAttribute('id', 'start');
highScoresBtn.setAttribute('id', 'highscore');

// text content 
titleEl.textContent = "START HERE --->";
startBtn.innerHTML = "START";

// appendix
body.appendChild(timerEl);
body.appendChild(titleEl);
titleEl.appendChild(startBtn); // <--so it sticks to the titleEl 
body.appendChild(mathQuestionEl);
body.appendChild(playerName);
body.appendChild(aBtn);
body.appendChild(bBtn);
body.appendChild(cBtn);
body.appendChild(dBtn);
body.appendChild(hallOfFameEl);

// hidden elements using the one css class 
aBtn.classList.add("hide");
bBtn.classList.add("hide");
cBtn.classList.add("hide");
dBtn.classList.add("hide");
playerName.classList.add("hide");
hallOfFameEl.classList.add("hide");

// functions 
var gameLogic = function () {
    //  little bit of html black magic 
    titleEl.textContent = "Question " + questionNumber;
    startQuiz.classList.add("hide")
    // I think these are callback functions?
    timerGame()
    randomMath()
    aBtn.classList.remove("hide");
    bBtn.classList.remove("hide");
    dBtn.classList.remove("hide");
    cBtn.classList.remove("hide");

    // target the correct id  at button a
    var aAnswer = document.querySelector("#a");
    aAnswer.addEventListener('click', randomMath);

    // target the incorrect id at button b
    var bAnswer = document.querySelector("#b");
    bAnswer.addEventListener('click', randomMath);

    // target the incorrect id at button c
    var cAnswer = document.querySelector("#c");
    cAnswer.addEventListener('click', randomMath);

    // target the incorrect id at button d
    var dAnswer = document.querySelector("#d");
    dAnswer.addEventListener('click', randomMath);

};

// really simple minute clock
var timerGame = function () {
    timeCount = 60
    var timeInterval = setInterval(function () {
        if (timeCount > -1) {
            timerEl.textContent = "TIME LEFT: " + timeCount + " seconds";
            timeCount--;
        } else {
            clearInterval(timeInterval)
            // the final mess is called here 
            endGame()
        }
    }, 1000);
}

// the guts of the questions
var randomMath = function () {
    var randA = (Math.floor(Math.random() * 11 + 1));
    var randB = (Math.floor(Math.random() * 11 + 1));
    mathQuestionEl.textContent = randA + " x " + randB + " = ??";
    var validAnswer = randA * randB;
    // let finalAnswers = []
    let finalAnswers = [validAnswer, validAnswer + 1, validAnswer - 1, validAnswer + 3];
    // for (var i = 0; i < potAnswers.length; i++) {
    //     var answerId = (Math.floor(Math.random() * potAnswers.length));
    //     potAnswers.splice(answerId, 1);
    //     var answerVal = potAnswers[answerId]
    //     finalAnswers.push(answerVal);
    // }
    aBtn.innerHTML = finalAnswers[0];
    bBtn.innerHTML = finalAnswers[1];
    cBtn.innerHTML = finalAnswers[2];
    dBtn.innerHTML = finalAnswers[3];
    if (validAnswer === finalAnswers) {
        questionNumber++;
        titleEl.textContent = "Question " + questionNumber;

        scoreCount++;
    }

    else {
        timeCount = timeCount - 5;
        questionNumber++;
        titleEl.textContent = "Question " + questionNumber;
    }



};

//  where I am  working 
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

        var userName = document.getElementById("user").value;
        localStorage.setItem(userName, scoreCount);


        highScores.classList.add("hide");
        scoreScreen();
    });



};
//  where i am working 
var scoreScreen = function () {

    questionNumber = 1;
    scoreCount = 0;
    titleEl.textContent = "HIGHSCORES";
    mathQuestionEl.textContent = "HALL OF FAME:"
    playerName.classList.add("hide");
    // TODO: retrieve stored data and display it 
    // ISSUES: JSON stringify/parse in the right places
    var savedGame = localStorage.getItem(scoreCount);
    console.log(savedGame);
    hallOfFameEl.classList.remove("hide");
    startQuiz.classList.remove("hide");
    startQuiz.textContent = "AGAIN?"
    body.appendChild(startBtn);
};

// target the thing we are clicking on 
var startQuiz = document.querySelector("#start");
// click to begin the quiz!
startQuiz.addEventListener('click', gameLogic);
