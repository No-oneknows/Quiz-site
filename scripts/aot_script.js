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
    endButton.innerText = "More"
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
    question: "What is the Japanese name for ‘Attack on Titan’?",
    answers: [
      { text: "Yu Yu Hakusho", correct: false },
      { text: "Kosaku Shima", correct: false },
      { text: "Shingeki no Kyojin", correct: true },
      { text: "Kimi ni Todoke", correct: false },
    ],
  },
  {
    question: "While in his Pure Titan form, who eats Bertholdt Hoover?",
    answers: [
      { text: "Reiner Braun", correct: false },
      { text: "Eren Yeager", correct: false },
      { text: "Porco Galliard", correct: false },
      { text: "Armin Arlert", correct: true },
    ],
  },
  {
    question: "What is the method that turns the Subjects of Ymir into Titans?",
    answers: [
      { text: "Eaten by an existing Titan", correct: false },
      { text: "Injection", correct: true },
      { text: "Shot by a PSA rifle", correct: false },
      { text: "Torture", correct: false },
    ],
  },
  {
    question: "What relation is Kenny the Ripper to Levi Ackerman?",
    answers: [
      { text: "His uncle", correct: true },
      { text: "His father", correct: false },
      { text: "His brother", correct: false },
      { text: "His father-in-law", correct: false },
    ],
  },
  {
    question:
      "The Founding Titan allows its user to gain control of other titans by doing what?",
    answers: [
      { text: "Screaming", correct: true },
      { text: "Dancing", correct: false },
      { text: "Jumping", correct: false },
      { text: "Whistling", correct: false },
    ],
  },
  {
    question: "How did Eren accidentally trigger his Titan transformation?",
    answers: [
      { text: "Practicing his shooting", correct: false },
      { text: "Trying to pick up a spoon ", correct: true },
      { text: "Riding a horse", correct: false },
      { text: "Sneezing", correct: false },
    ],
  },
  {
    question:
      "Who was Jean Kirschtein disguised as when he was taken to the Imperial Capital for judgment?",
    answers: [
      { text: "Shiganshina", correct: false },
      { text: "Mitras", correct: false },
      { text: "Ragako", correct: false },
      { text: "Libero", correct: true },
    ],
  },
  {
    question: "The Battle of Shiganshina District took place in what year?",
    answers: [
      { text: " 890", correct: false },
      { text: "875", correct: false },
      { text: "850", correct: true },
      { text: "820", correct: false },
    ],
  },
  {
    question:
      "In Eldian mythology, who granted Ymir Fritz the power of the Titans?",
    answers: [
      { text: "The Spawn of the Devil", correct: false },
      { text: "The Devil of All Earth", correct: true },
      { text: "The Devil of Helos", correct: false },
      { text: "The Dancing Devil", correct: false },
    ],
  },
  {
    question:
      "How long does someone live for after eating a person controlling one of the 9 Titans?",
    answers: [
      { text: "19 years", correct: false },
      { text: "10 years", correct: false },
      { text: "13 years", correct: true },
      { text: "15 years", correct: false },
    ],
  },
];
