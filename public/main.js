let questionsCorrect = 0;
let questionsAnswered = 0;
let randomNumber1 = 0;
let randomNumber2 = 0;
let correctAnswer = 0;

const initialiseGame = () => {
  questionsCorrect = 0;
  questionsAnswered = 0;
  newRound();
};

newRound = () => {
  document.querySelector("input").value = "";
  document.getElementById("score").innerHTML =
    "Score: " + questionsCorrect + "/" + questionsAnswered;
  newQuestion();
};

const newQuestion = () => {
  randomNumber1 = randomNumber();
  randomNumber2 = randomNumber();
  let operator;
  switch (Math.floor(Math.random() * 4)) {
    case 1:
      correctAnswer = randomNumber1 + randomNumber2;
      operator = "+";
      break;
    case 2:
      correctAnswer = randomNumber1 - randomNumber2;
      operator = "-";
      break;
    case 3:
      correctAnswer = randomNumber1 / randomNumber2;
      if ((correctAnswer % 0.25 === 0) | (correctAnswer % 0.1 === 0)) {
        operator = "/";
      } else {
        correctAnswer = randomNumber1 * randomNumber2;
        operator = "*";
      }
      break;
    default:
      correctAnswer = randomNumber1 * randomNumber2;
      operator = "*";
  }
  document.getElementById("question").innerHTML =
    randomNumber1 + operator + randomNumber2 + "?";
};

randomNumber = () => {
  return Math.floor(Math.random() * 10) + 1;
};

submitAnswer = () => {
  let title = document.getElementById("title");
  let answer = document.querySelector("input").value;
  if (answer == correctAnswer) {
    questionsCorrect += 1;
    title.innerHTML = "That Was Correct!";
    title.classList = "correct";
  } else {
    title.innerHTML = "Incorrect..";
    title.classList = "wrong";
  }
  questionsAnswered += 1;
  newRound();
};

const enterKey = event => {
  if (event.keyCode == 13) {
    submitAnswer();
  }
};

initialiseGame();
