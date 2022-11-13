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
    question: "The famous Konark Temple in Orissa was built by whom?",
    answers: [
      { text: "Rajraja", correct: false },
      { text: "Firoz Shah Tughloq.", correct: false },
      { text: "King Narsimhadeva", correct: true },
      { text: "None of these", correct: false },
    ],
  },
  {
    question: " Mahabodhi Temple is located at?",
    answers: [
      { text: "Agra", correct: false },
      { text: "Tamil Nadu", correct: false },
      { text: "New Delhi", correct: false },
      { text: "Bodh Gaya", correct: true },
    ],
  },
  {
    question: "Reserve Bank of India is headquarted at?",
    answers: [
      { text: "New Delhi", correct: false },
      { text: "Chenna", correct: true },
      { text: "Kolkata", correct: false },
      { text: "Mumbai", correct: false },
    ],
  },
  {
    question: "Brihadeshwara Temple is dedicated to:",
    answers: [
      { text: "Lord Shiva", correct: true },
      { text: "Lord Sun", correct: false },
      { text: "Gautam Buddha", correct: false },
      { text: "Lord Vishnu", correct: false },
    ],
  },
  {
    question: "The Vikram Sarabhai Space Centre is based at?",
    answers: [
      { text: "Thiruvananthapuram", correct: true },
      { text: "Hyderabad", correct: false },
      { text: "Pune", correct: false },
      { text: "Bangalore", correct: false },
    ],
  },
  {
    question: "Who was the architect of Taj Mahal?",
    answers: [
      { text: "Yamuna", correct: false },
      { text: "Ustad Ahmad Lahauri", correct: true },
      { text: "Mumtaz Mahal", correct: false },
      { text: "Shah Jahan", correct: false },
    ],
  },
  {
    question:
      "When was the Taj Mahal designated as a UNESCO World Heritage Site?",
    answers: [
      { text: "1993", correct: false },
      { text: "1997", correct: false },
      { text: "1985", correct: false },
      { text: "1983", correct: true },
    ],
  },
  {
    question: "India Gate was designed by?",
    answers: [
      { text: " Sir Edwin Peterson", correct: false },
      { text: "Sir Robert", correct: false },
      { text: "Sir Edwin Lutyens", correct: true },
      { text: "Sir Andrew Michells", correct: false },
    ],
  },
  {
    question:
      "The 'India Gate' was built in the memory of which person or event?",
    answers: [
      { text: "Indians killed during the Revolt of 1857", correct: false },
      { text: "Soldiers killed during First World War", correct: true },
      { text: "Protestors who died during Civil Non", correct: false },
      {
        text: "Participants of the Civil Disobedience Movement",
        correct: false,
      },
    ],
  },
  {
    question: "Where is the India Gate located?",
    answers: [
      { text: "Gandhi Nagar", correct: false },
      { text: "Civil Lines", correct: false },
      { text: "Rajpath", correct: true },
      { text: "Shastri Nagar", correct: false },
    ],
  },
];
