let timeDisplay = document.getElementById("timeDp");
let operation = document.getElementById("operationMenu");
const startBtn = document.getElementById("startBtn");
let btns = document.querySelectorAll(".btns");

let clearIv = 0;
let timerIv;
let timeLeft = 10;
let score = 0;
let highScore = 0;
let correctNumber = 0;

window.onload = function () {
  let scoreBrowser = localStorage.getItem("highScore");
  if (scoreBrowser != undefined) highScore = scoreBrowser;
  document.getElementById("highScore").innerHTML = "High Score: " + highScore;
};

function startGame() {
  nextQuestions();

  startBtn.disabled = true;

  timeDisplay.hidden = false;
  timerIv = setInterval(function () {
    timeLeft -= 1;

    timeDisplay.innerHTML = "Vaqt tugamoqda: " + timeLeft;
    if (timeLeft == 0) {
      clearInterval(timerIv);
      document.getElementById("btn1").disabled = true;
      document.getElementById("btn2").disabled = true;
      document.getElementById("btn3").disabled = true;
      document.getElementById("btn4").disabled = true;

      btns.disabled = true;
      timeDisplay.innerHTML = "Vaqt tugadi";
    }
  }, 1000);

  startBtn.style.marginBottom = "50px";
  timeDisplay.style.marginLeft = "20px";
}

function nextQuestions() {
  let firstNumber = Math.ceil(Math.random() * 12);
  let secondNumber = Math.ceil(Math.random() * 12);
  correctNumber = firstNumber * secondNumber;
  operation.innerHTML = firstNumber + "*" + secondNumber;

  let wrongNumber1 =
    Math.ceil(Math.random() * 12) * Math.ceil(Math.random() * 12);
  let wrongNumber2 =
    Math.ceil(Math.random() * 12) * Math.ceil(Math.random() * 12);
  let wrongNumber3 =
    Math.ceil(Math.random() * 12) * Math.ceil(Math.random() * 12);
  let wrongNumber4 =
    Math.ceil(Math.random() * 12) * Math.ceil(Math.random() * 12);

  document.getElementById("btn1").innerHTML = wrongNumber1;
  document.getElementById("btn2").innerHTML = wrongNumber2;
  document.getElementById("btn3").innerHTML = wrongNumber3;
  document.getElementById("btn4").innerHTML = wrongNumber4;

  let correctNumberIndex = Math.floor(Math.random() * 4) + 1;
  let correctNumberID = "btn" + correctNumberIndex;
  document.getElementById(correctNumberID).innerHTML = correctNumber;
}

function checkNumber(btnIndex) {
  let number = document.getElementById("btn" + btnIndex).innerHTML;
  if (number == correctNumber) score += 1;
  document.getElementById("currentScore").innerHTML = "Current Score: " + score;
  if (score > highScore) highScore = score;
  localStorage.setItem("highScore", highScore);
  document.getElementById("highScore").innerHTML = "High Score: " + highScore;
  nextQuestions();
}
