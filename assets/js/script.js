// to write to the DOM 
var body = document.body;
// create element 
var h1El = document.createElement('h1');
// modify element 
h1El.textContent = "START HERE --->";
h1El.setAttribute('style', 'text-align: center');
var startBtn = document.createElement("button");
startBtn.innerHTML = "START";

// append to page 
body.appendChild(h1El);
h1El.appendChild(startBtn);

questionEl = function() {
    h1El.textContent = "Question";
    var h2El = document.createElement('h2');
    h2El.textContent = "click a button";
    var correctBtn = document.createElement("button");
    correctBtn.innerHTML = "CORRECT";
    var incorrectBtn = document.createElement("button");
    incorrectBtn.innerHTML = "INCORRECT";
    body.appendChild(h2El);
    body.appendChild(correctBtn);
    body.appendChild(incorrectBtn);
    // target the thing we are clicking on 
var correctAnswer = document.querySelector("button");
// click it to change the html elements
correctAnswer.addEventListener('click', questionEl);


};

// target the thing we are clicking on 
var startQuiz = document.querySelector("button");
// click it to change the html elements
startQuiz.addEventListener('click', questionEl);

var scoreCount = 0;
