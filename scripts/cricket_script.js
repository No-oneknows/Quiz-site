const startButton = document.getElementById("start-btn");
const nextButton = document.getElementById("next-btn");
const questionContainerElement = document.getElementById("question-container");
const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-buttons");
const endButton = document.getElementById("end-btn");

let shuffledQuestions, currentQuestionIndex;

startButton.addEventListener("click", startGame);
nextButton.addEventListener("click", () => {
  currentQuestionIndex++;
  setNextQuestion();
});

function startGame() {
  startButton.classList.add("hide");
  shuffledQuestions = questions.sort(() => Math.random() - 0.5);
  currentQuestionIndex = 0;
  questionContainerElement.classList.remove("hide");
  setNextQuestion();
}

function setNextQuestion() {
  resetState();
  showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
  questionElement.innerText = question.question;
  question.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("btn");
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
    answerButtonsElement.appendChild(button);
  });
}

function resetState() {
  clearStatusClass(document.body);
  nextButton.classList.add("hide");
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild);
  }
}

function selectAnswer(e) {
  const selectedButton = e.target;
  const correct = selectedButton.dataset.correct;
  setStatusClass(document.body, correct);
  Array.from(answerButtonsElement.children).forEach((button) => {
    setStatusClass(button, button.dataset.correct);
  });
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove("hide");
  } else {
    startButton.innerText = "Restart";
    startButton.classList.remove("hide");
    endButton.innerText = "More";
    endButton.classList.remove("hide");
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element);
  if (correct) {
    element.classList.add("correct");
  } else {
    element.classList.add("wrong");
  }
}

function clearStatusClass(element) {
  element.classList.remove("correct");
  element.classList.remove("wrong");
}

const questions = [
  {
    question: "What are the small pieces of wood on top of the stumps called?",
    answers: [
      { text: "Sticks", correct: false },
      { text: "Toothpicks", correct: false },
      { text: "Bails", correct: true },
      { text: "Stumpettes", correct: false },
    ],
  },
  {
    question: "What is an all-rounder?",
    answers: [
      { text: "Reiner Braun", correct: false },
      { text: "The perimeter of the ground", correct: false },
      {
        text: "The average number of runs a batsman has scored",
        correct: false,
      },
      { text: "Player skilled at both batting and bowling", correct: true },
    ],
  },
  {
    question: "What are the dimensions of the pitch?",
    answers: [
      { text: "11 yards by 5 feet", correct: false },
      { text: "22 yards by 10 feet", correct: true },
      { text: "33 yards by 15 feet", correct: false },
      { text: "44 yards by 20 feet", correct: false },
    ],
  },
  {
    question: "What is the highest number of runs scored in an over?",
    answers: [
      { text: "77", correct: true },
      { text: "57", correct: false },
      { text: "63", correct: false },
      { text: "43", correct: false },
    ],
  },
  {
    question: "What is the highest ever Test batting average?",
    answers: [
      { text: "99.94", correct: true },
      { text: "89.23", correct: false },
      { text: "95.62", correct: false },
      { text: "83.94", correct: false },
    ],
  },
  {
    question: "When was the Cricket World Cup founded?",
    answers: [
      { text: "1965", correct: false },
      { text: "1975", correct: true },
      { text: "1985", correct: false },
      { text: "1995", correct: false },
    ],
  },
  {
    question: "Where will the 2023 Cricket World Cup be hosted?",
    answers: [
      { text: "Pakistan", correct: false },
      { text: "Australia", correct: false },
      { text: "New Zealand", correct: false },
      { text: "India", correct: true },
    ],
  },
  {
    question: "How long did the longest cricket match in history go on for?",
    answers: [
      { text: "2 days", correct: false },
      { text: "6 days", correct: false },
      { text: "9 days", correct: true },
      { text: "12 days", correct: false },
    ],
  },
  {
    question: "When was the first women’s cricket match recorded?",
    answers: [
      { text: "1825", correct: false },
      { text: "1745", correct: true },
      { text: "1945", correct: false },
      { text: "1720", correct: false },
    ],
  },
  {
    question: " Who has the most t20 world cup runs?",
    answers: [
      { text: "Ricky Ponting", correct: false },
      { text: "Sachin Tendulkar", correct: false },
      { text: "Virat Kholi", correct: true },
      { text: "Rohit Sharma", correct: false },
    ],
  },
];
